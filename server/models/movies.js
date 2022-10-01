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
    })
  }
}


