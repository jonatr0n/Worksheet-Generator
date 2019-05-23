var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../config/connection');

router.get('/', function(req, res) {
  connection.query('SELECT * FROM `worksheet_history`', function(
    error,
    results,
    fields
  ) {
    if (error) {
      throw error;
    }
    if (results) {
      let rando = Math.floor(Math.random() * results.length);
      res.json(results[rando]);
    }
  });
});

router.get('/history', function(req, res) {
  connection.query(
    `SELECT * FROM \`worksheet_history\` WHERE owner_username = ?`,
    [req.query.userName],
    function(error, results, fields) {
      if (error) {
        throw error;
      }
      if (results) {
        res.json(results);
      }
    }
  );
});

router.post('/', function(req, res) {
  const data = req.body.data;
  const arr = req.body.data.map(cur => {
    return [
      cur.date,
      cur.question,
      cur.max,
      cur.min,
      cur.answer_num,
      cur.answer,
      cur.userName
    ];
  });
  console.log(arr);
  let sql =
    'INSERT INTO worksheet_history ( date_saved, question, max, min, answer_num, answer, owner_username) VALUES ?';
  connection.query(sql, [arr], function(err) {
    if (err) throw err;
  });
  res.send('posted');
});

module.exports = router;
