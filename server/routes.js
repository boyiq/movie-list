var controller = require('./controllers');
var router = require('express').Router();

router.post('/movies', controller.movies.post);
router.get('/movies', controller.movies.get);

module.exports = router;