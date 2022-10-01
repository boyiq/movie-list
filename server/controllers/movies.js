var models = require('../models');

const moviedata = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false},
  {title: 'Moana', watched: false},
];

module.exports = {
  post: function(req, res) {
    //console.log('request body is' , req.body)
    models.movies.create(req.body)
    .then((result)=> {
      res.status(201).json(result)
    }).catch(()=>(
      res.sendStatus(400)
    ))
  },

  get: function(req, res) {
    models.movies.getAll()
    .then((movies)=> {
      res.status(200).json(movies)
    }).catch(()=> {
      res.sendStatus(400)
    })
  },

  put: function(req, res) {
    models.movies.updateAndRetrieve(req.body)
    .then((updatedMovie)=> {
      //console.log('after updating the returned result is ', result[0].dataValues)
      res.status(201).json(updatedMovie)
    }).catch(()=> (
      res.sendStatus(400)
    ))
  }
}