var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  // parse.com 연동
  res.json({user: {name: req.body.name}});
});

module.exports = router;
