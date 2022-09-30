//var models = require('../models');
const moviedata = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false},
];

module.exports = {
  post: function(req, res) {
    moviedata.push(req.body)
    res.status(200).json('hello world')
    //.then(()=> (
    //  res.sendStatus(201).json('hellow world')
    //  //console.log('movie added, now movielist is' , moviedata);
    //)).catch(()=> (
    //  res.sendStatus(400)
    //))
  },

  get: function(req, res) {
    res.status(200).json(moviedata)
  }
}