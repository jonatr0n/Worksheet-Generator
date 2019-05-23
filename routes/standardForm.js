var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
const standard_form_questions = require('../standard-form/standard-form');
const standard_form_questionsa = require('../standard-form/c=ax+by');
const standard_form_questionsb = require('../standard-form/ax=c-by');
const standard_form_questionsc = require('../standard-form/ax=-by+c');

//the req needs to have a body with a max, min, and the number of question you are seeking.

router.get('/', function(req, res) {
  let body = req.body;
  let max = body.max;
  let min = body.min;
  let numOfQuestions = body.numOfQuestions;
  connection.query(
    'SELECT * FROM standard_form_both WHERE max <= ? AND min >= ?',
    [max, min],
    function(req, results) {
      if (results) {
        length = results.length;
        questionArr = [];
        for (i = 0; i < numOfQuestions; i++) {
          let rando = Math.floor(Math.random() * length);
          if (!questionArr.includes(results[rando])) {
            questionArr.push(results[rando]);
          }
        }
        res.json(questionArr);
      }
    }
  );
});

router.get('/one', function(req, res) {
  let body = req.body;
  let max = body.max;
  let min = body.min;
  connection.query(
    'SELECT * FROM standard_form_both WHERE max <= ? AND min >= ?',
    [max, min],
    function(req, results) {
      if (res) {
        let rando = Math.floor(Math.random() * results.length);
        res.json(results[rando]);
      }
    }
  );
});

// Generate the equations to fill the database
router.post('/', function(req, res) {
  let sql =
    'INSERT INTO standard_form_both(question, answer, max, min) VALUES ?';
  connection.query(sql, [standard_form_questions], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [standard_form_questionsa], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [standard_form_questionsb], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [standard_form_questionsc], function(err) {
    if (err) throw err;
  });
  res.send('posted');
});

module.exports = router;
