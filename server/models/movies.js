var db = require('../db');

module.exports = {
  getAll: function() {
    return db.movies.findAll()
  },

  create: function(movieObj) {
    //console.log("the passed in movie is", movieObj)
    return db.movies.create({
      title: movieObj.title,
      watched: movieObj.watched
    }).then(()=>(
      db.movies.findAll(
        {where: {title: movieObj.title}}
      )
    ))
  },

  updateAndRetrieve: function(movieObj) {
    return db.movies.update(
      { watched: Math.abs(movieObj.watched - 1)},
      { where: {title: movieObj.title}}
    ).then(()=>(
      db.movies.findAll(
        {where: {title: movieObj.title}}
      )
    ))
  }
}


