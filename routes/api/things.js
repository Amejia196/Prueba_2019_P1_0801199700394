var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next){ 
  res.json({"msg":"ok"});
});


router.post('/new', function(req, res, next){
  var_thingsData = req.body;
  console.log(_thingsdata);
  res.json({"msg":"ok"});
});

router.put('/done/:thingId', function(req, res, next){
  var_thingsId = req.params.thingId;
  console.log(_thingId);
  res.json({"msg":"ok"});
});


module.exports = router;
