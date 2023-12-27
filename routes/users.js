var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/code', function(req, res, next) {
  let code = req.body;
  console.log(code);
  res.send('respond with a resource');
});

module.exports = router;
