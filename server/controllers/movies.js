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
    console.log('request body is' , req.body)
    models.movies.create(req.body)
    .then(()=> {
      res.status(201).json('movie successfully added')
    }).catch(()=>(
      res.sendStatus(400)
    ))
    //.then(()=> (
    //  res.sendStatus(201).json('hellow world')
    //  //console.log('movie added, now movielist is' , moviedata);
    //)).catch(()=> (
    //  res.sendStatus(400)
    //))
  },

  get: function(req, res) {
    models.movies.getAll()
    .then((movies)=> {
      res.status(200).json(movies)
    }).catch(()=> {
      res.sendStatus(400)
    })
  }
}