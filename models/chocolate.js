const mongoose = require('mongoose')



const chocolateSchema = new mongoose.Schema({
    chocolateType: {
        type: String,
       
    },
    chocolateFilling: {
        type: String,
    },
    boxSize: {
        type:    String,
        required:  true,

    },

    occasion: {
        type:   String,
        required:   false,

    },

    
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   
})




module.exports =mongoose.model('Chocolate',chocolateSchema)