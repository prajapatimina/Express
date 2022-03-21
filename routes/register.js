var express = require('express');
var router = express.Router();
const userModel = require('../models/users')

router.get('/', function(req,res,next){
    res.render('register', {title: 'Register'})
  })
  
  router.post('/', async function(req, res, next) {
  try {
    let user={
      name:req.body.name,
      email:req.body.email,
      address: req.body.address,
      age: req.body.age,
      gender: req.body.gender
    }
    await new userModel(user).save();
    res.redirect('/users');
  } catch (error) {
     console.log(error.message)
   }
    
  });

module.exports = router;

  