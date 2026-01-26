const router = require("express").Router()

const Chocolate = require('../models/chocolate')

router.get('/',async (req,res)=>{
    const chocolates = await Chocolate.find();
    res.render('homepage.ejs',{chocolates})
})
module.exports = router;
