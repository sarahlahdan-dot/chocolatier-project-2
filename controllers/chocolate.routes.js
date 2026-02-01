

const router = require('express').Router();
const Chocolate = require('../models/chocolate')

// get all chocolate

router.get('/', async (req,res) =>{
    const chocolates = await Chocolate.find();
    res.render('main-menu.ejs', {chocolates:chocolates})
})

// creating new chocolate

router.get('/new', (req,res) =>{
        res.render('create-new-chocolate.ejs')
})
 
router.post('/', async (req, res) => {
  console.log('REQ BODY:', req.body)
  await Chocolate.create(req.body)
  res.redirect('/adjust-menu.ejs')
})
 



// delete chocolate
router.post('/delete/:id', async (req,res)=>{
    await Chocolate.findByIdAndDelete(req.params.id)
  res.redirect('/chocolates/adjust')
    
})

// adjust chocolate page

router.get('/adjust', async(req,res)=>{
    const foundChocolate = await Chocolate.find()
    res.render('adjust-menu.ejs',{chocolates:foundChocolate})
})

//update chocolate

router.get('/update/:id' , async (req,res)=>{
    const oneChocolate = await Chocolate.findById(req.params.id)
    res.render("updated-menu.ejs",{oneChocolate})
})

//update chocolate and save

router.post('/update/:id' , async(req,res)=>{
    const updatedChocolate = await Chocolate.findByIdAndUpdate(req.params.id , req.body, { new:true })
    res.redirect('/chocolates/adjust')
})






module.exports = router