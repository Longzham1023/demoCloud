var express = require('express');
var router = express.Router();
const UserModel = require('../model/UserModel')

router.get('/', async(req, res)=> {
  const Users = await UserModel.find({})
  res.render('user', {Users: Users});
});

router.get('/add', async (req, res)=>{
  res.render('User/add');
})

router.post('/add', async( req, res)=>{
  var toy = req.body;
  await UserModel.create(toy);
  res.redirect('/');
})

router.get('/edit/:id', async (req, res) => {
  var toy = await UserModel.findById(req.params.id);
  res.render('User/edit', { toy : toy});
})

router.post('/edit/:id', async (req, res) => {
  await UserModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
})
module.exports = router;
