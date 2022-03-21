var express = require('express');
const userModel = require('../models/users');
var router = express.Router();
let mongoose = require('mongoose')



/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let users = await userModel.find({})
    // console.log(users)
     res.render('user', {users});
    
  } catch (error) {
    console.log(error.message)
  }
 
});

router.get('/:id',async function(req,res,next){
  let user = await userModel.findById(req.params.id)
  console.log(user)
  res.render('update', {user})
})

router.post('/:id', async function(req, res, next) {
  // console.log(req.body)
 
  let updatedUser={
    name:req.body.name,
    email:req.body.email,
    address: req.body.address,
    age: req.body.age,
    gender: req.body.gender
  }
 let update= await userModel.findOneAndUpdate({_id:req.params.id},updatedUser,{new:true});
 console.log('edit',update)
  res.redirect('/users');
});

router.get('/:id/delete', async function(req,res,next){
  let id =req.params.id;

  let deletedUser = await userModel.findByIdAndRemove(id)
  console.log(deletedUser,'d')
  res.redirect('/users')
})

module.exports = router;
