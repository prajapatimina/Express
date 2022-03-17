var express = require('express');
var router = express.Router();

const posts = [
  {title: 'File System', body: 'Lorem ipsum...' },
  {title: 'Database', body: 'Lorem ipsum...' },
  {title: 'Web Server', body: 'Lorem ipsum...' },
  {title: 'Web Modules', body: 'Lorem ipsum...' },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node' });
});

router.get('/about', function(req,res,next){
  res.render('about', {posts, title:'About'})
})

module.exports = router;
