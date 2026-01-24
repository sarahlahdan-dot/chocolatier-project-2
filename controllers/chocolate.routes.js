
const Chocolate = require('../models/chocolate')
const router = require('express').Router();

// get all chocolate

router.get('/', async (req,res) =>{
    const chocolates = await Chocolate.find();
    res.render('chocolate-menu.ejs', { chocolates})
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

// update chocolate
router.get('/:id/edit', async(req,res)=>{
    console.log(req.params.id)
    const foundChocolate = await Chocolate.findById(req.params.id)
    res.render('update-chocolate.ejs',{chocolate:foundChocolate})
})

module.exports = router