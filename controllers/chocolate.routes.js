
const Chocolate = require('../models/chocolate')
const router = require('express').Router();

// get all chocolate

router.get('/', async (req,res) =>{
    const chocolates = await Chocolate.find();
    res.render('main-menu.ejs', {chocolates:chocolates})
})

// creating new chocolate

router.get('/new', async (req,res) =>{
        res.render('create-new-chocolate.ejs')
})
 
router.post('/', async (req,res) => {
  const chocolates = await Chocolate.create(req.body);
  res.redirect ('/chocolates')
})

// delete chocolate
router.post('/delete/:id', async(req,res)=>{
    const deletedChocolate = await Chocolate.findByIdAndDelete(req.params.id)
    res.redirect('/chocolates')
    
})

// update chocolate page
router.get('/adjust', async(req,res)=>{
    console.log(req.params.id)
    const foundChocolate = await Chocolate.find()
    res.render('adjust-menu.ejs',{chocolates:foundChocolate})
})

//edit chocolate

router.get('/update/:id' , async(req,res)=>{
    const oneChocolate = await Chocolate.findById(req.params.id)
    res.render("updated-menu.ejs",{oneChocolate})
})

router.post('/update/:id' , async(req,res)=>{
    const updatedChocolate = await Chocolate.findByIdAndUpdate(req.params.id , req.body)
    res.redirect('/chocolates/adjust')
})

router.post('/delete/:id' , async(req,res)=>{
    const deletedChocolate = await Chocolate.findByIdAndDelete(req.params.id)
    res.redirect('/chocolates/adjust')
})


module.exports = router