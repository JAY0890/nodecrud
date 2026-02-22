const mongoose=require('mongoose')

const product=new mongoose.Schema({

    productname:{
        type:String,
        required:[true,"product name is required"],
        trim: true,
        maxlength:180
    },

    sku:{
        type:String,
        required:[true,"SKU number is required"],
        unique:true,
        minlength:[6,"SKU must be atleast 6 chars"]
    },

    price:{
        type:Number,
        required:[true,"price required"],
        minlength:[0],

    },

    quantity:{
        type:Number,
        required:[true,"quantity required"],
        minlength:[0],
        default:0,
    },

    category:{
        type:String,
        required:[true,"category required"],
        enum:{
            values:['electronic','clothing','home']
        }
    },

    instock:{
        type:Boolean,
        default:true

    }
})

module.exports = mongoose.model('Product',product)
