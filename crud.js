const express = require('express');

// CORRECT: Calling it on the module itself
const router = express.Router();


const Product=require('./schema/product')

//create
router.post('/add',async(req,res)=>{

    try{
        const product=await Product.create(req.body);
        res.status(201).json(product)
    }catch(err){
        res.status(400).json(err)
    }
})

//read
router.get('/get',async(req,res)=>{

    try{
        const products=await Product.find();
        res.status(200).json(products)
    }catch(err){
        res.status(400).json(err)
    }
})


//update
router.patch('/update/:id',async(req,res)=>{

    try{
        const updatedproduct=await Product.updateOne(
            req.params.id,
            res.body,
            {new:true,runValidators:true}
        )
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(400).json(err)
    }
})


//delete
router.delete('/delete/:id',async(req,res)=>{

    try{
        const deleted=await Product.deleteOne(req.params.id)
        res.status(200).json({message:"product deleted successfully"})
    }catch(err){
        res.status(400).json(err)
    }
})


router.get('/test',(req,res)=>{
    res.json("this is test")
})

router.get("/get/:id",async(req,res)=>{

    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product)
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports=router