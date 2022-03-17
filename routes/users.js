var express = require('express');
var router = express.Router();

const users =[
  {firstName:"John", lastName:"Sht", age:15},
  {firstName:"Jane", lastName:"Goli", age:25},
  {firstName:"Ailce", lastName:"Sht", age:25}

]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {users});
});

module.exports = router;
