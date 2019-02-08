var express= require('express');
var router = express.Router();

module.exports = router;


router.post('/new', function(req, res, next)){
  var_userData = req.body;
  console.log(_userdata);
  res.json({"msg":"ok"});
}


router.post('/login', function(req, res, next)){
  var_userData = req.body;
  console.log(_userdata);
  res.json({"msg":"ok"});
}
