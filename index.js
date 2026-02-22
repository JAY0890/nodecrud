require('dotenv').config()
const express=require('express')
const app=express()

// const Product=require('./schema/product')
const mongoose=require('mongoose')
const router=require('./crud')

app.use(express.json())

const body={"name":"jay","age":50}

app.get("/get",(req,res)=>{

    res.json(body)
})

const con=process.env.MONGOCON

mongoose.connect(con)
.then(()=>{console.log('connected successfully');})
.catch(err=>console.log('error occuerd ',err))


app.use('/api',router)

const port=process.env.PORT || 5000
app.listen(port)