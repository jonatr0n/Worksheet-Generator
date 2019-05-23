var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
const slope_intercept_questions = require('../slope-intercept/not-including-negatives/slope-intercept');
const slope_intercept_questionsa = require('../slope-intercept/not-including-negatives/b+mx=y');
const slope_intercept_questionsb = require('../slope-intercept/not-including-negatives/mx+b=y');
const slope_intercept_questionsc = require('../slope-intercept/including-negatives/mx=y-b');
const slope_intercept_questionsd = require('../slope-intercept/including-negatives/negb+y=mx');
const slope_intercept_questionse = require('../slope-intercept/including-negatives/negmx=b-y');
const slope_intercept_questionsf = require('../slope-intercept/including-negatives/y-b=mx');

//function used to assure the number of repeated answers is limited to the percentage of the number of questions
router.get('/', async function(req, res) {
  largestAnswer = max => {
    for (i = 2; i <= max / 2; i++) {
      if (i * i + i > max) {
        return i - 1;
      }
    }
  };

  countFromEachTable = (numOfQuestions, absMax) => {
    return numOfQuestions / absMax;
  };
  let query = req.query;
  let max = Number(query.max);
  let min = Number(query.min);
  let numOfQuestions = Number(query.numOfQuestions);
  let maxAnswer = largestAnswer(max);
  let minAnswer = Number(`-${maxAnswer}`);
  let questionArr = [];
  connection.query(
    `SELECT * FROM slope_intercept_both WHERE max <= ? AND min >= ? AND answer_num <= ? AND answer_num >= ? ORDER BY RAND()`,
    [max, min, maxAnswer, minAnswer, numOfQuestions],
    async function(error, results, fields) {
      if (error) {
        throw error;
      }
      if (results) {
        // let rando = Math.floor(Math.random() * results.length);
        let i = 0;
        console.log(
          'akuna',
          countFromEachTable(numOfQuestions, largestAnswer(max))
        );
        while (numOfQuestions - questionArr.length > 0) {
          if (
            questionArr.filter(cur => cur.answer_num === results[i].answer_num)
              .length < countFromEachTable(numOfQuestions, largestAnswer(max))
          ) {
            questionArr.push(results[i]);
          }
          i++;
        }
        console.log(results);
        res.json(questionArr);
      }
    }
  );
});

router.get('/one', async function(req, res) {
  let query = req.query;
  let max = Number(query.max);
  let min = Number(query.min);
  connection.query(
    'SELECT * FROM slope_intercept_both WHERE max <= ? AND min >= ?',
    [max, min],
    function(error, results, fields) {
      if (error) {
        throw error;
      }
      if (results) {
        let rando = Math.floor(Math.random() * results.length);
        res.json(results[rando]);
      }
    }
  );
});

// Generate the equations to fill the database
router.post('/', function(req, res) {
  let sql = `INSERT INTO \`slope_intercept_both\`(question, max, min, answer_num, answer) VALUES ?`;
  console.log([slope_intercept_questions(-50, 50)]);
  connection.query(sql, [slope_intercept_questions(-50, 50)], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsa(-50, 50)], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsb(-50, 50)], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsc(-50, 50)], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsd(-50, 50)], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionse(-50, 50)], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsf(-50, 50)], function(err) {
    if (err) throw err;
  });
  res.send('posted');
});

router.post('/positive', function(req, res) {
  let sql =
    'INSERT INTO slope_intercept_positive(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questions], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsa], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsb], function(err) {
    if (err) throw err;
  });
  res.send('posted');
});

router.post('/negative', function(req, res) {
  let sql =
    'INSERT INTO slope_intercept_negative(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsc], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsd], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionse], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsf], function(err) {
    if (err) throw err;
  });
  res.send('posted');
});

module.exports = router;
