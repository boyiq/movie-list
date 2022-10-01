var Sequelize = require('sequelize');
var db = new Sequelize('movielist', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

var movies = db.define('movies', {
  title: Sequelize.STRING,
  watched: Sequelize.TINYINT
}, {
  timestamps: false
});

module.exports.movies = movies;