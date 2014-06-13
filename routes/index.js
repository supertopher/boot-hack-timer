var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {scripts: ['javascripts/timer.js'], title: 'Boot Hack Timer' });
});

module.exports = router;
