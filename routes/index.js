var express = require('express');
var router = express.Router();
const userModel = require('../models/users')

const posts = [
  {title: 'Express', body: 'Lorem ipsum lorem ipsum...' },
  {title: 'File System', body: 'Lorem ipsum...' },
  {title: 'Database', body: 'Lorem ipsum...' },
  {title: 'Web Server', body: 'Lorem ipsum...' }
]

/* GET home page. */
router.get('/', function(req,res,next){
  res.render('index',{title: 'Node', posts})
})



module.exports = router;
