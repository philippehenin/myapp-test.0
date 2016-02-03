var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kafka', { title: 'PHE Kafka Injection' });
});

module.exports = router;
