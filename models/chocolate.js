const mongoose = require('mongoose')



const chocolateSchema = new mongoose.Schema({
    chocolateName: {
        type: String,
    },

    chocolateType: {
        type: String,
       

       
    },
    chocolateFilling: {
        type: String,
    },

    boxSize: {
        type:    String,
        required:  false,

    },

    occasion: {
        type:   String,
        required:   false,

    },
    description:{
        type:String,
        default:''
    },

    imageUrl:{
        type:String,
        default:''
    },

    
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   
})




module.exports =mongoose.model('Chocolate',chocolateSchema)