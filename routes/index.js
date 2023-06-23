var express = require('express');
const ToyModel = require('../model/ToyModel')
const ToyGalleryModel = require('../model/ToyGallaryModel')
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  const toys = await ToyModel.find({})
  res.render('index', {toys : toys });
});


router.get('/contact', function(req, res) {
  res.render('contact')
});

router.get('/about', async(req, res) => {
  const toyGallerys = await ToyGalleryModel.find({})
  res.render('about',{toyGallerys: toyGallerys});
});

//-------------------Gallery----------------------------//
router.get('/toy', async(req, res)=> {
  const toyGallerys = await ToyGalleryModel.find({})
  res.render('toy', {toyGallerys: toyGallerys});
});

router.get('/delete/:id', async(req,res)=>{
  await ToyGalleryModel.findByIdAndDelete(req.params.id);
  res.redirect('/about')
})

router.get('/add', (req, res)=>{
  res.render('Toy/add');
})

router.post('/add', async( req, res)=>{
  var toy = req.body;
  await ToyGalleryModel.create(toy);
  res.redirect('/about');
})

router.get('/edit/:id', async (req, res) => {
  var toy = await ToyGalleryModel.findById(req.params.id);
  res.render('Toy/edit', { toy : toy});
})

router.post('/edit/:id', async (req, res) => {
  await ToyGalleryModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/about');
})

//-------------------Gallery----------------------------//


module.exports = router;
