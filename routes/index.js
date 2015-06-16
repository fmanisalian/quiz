var express = require('express');
var router = express.Router();

//nueva variable quizControllers
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// he añadido get
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/quizes/author', quizController.author);  //añadido el get

module.exports = router;