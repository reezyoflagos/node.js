const express = require ('express')     //step 1: import express
const router = express.Router()    //step 2: create a variable called router ans store the instance of express
const productsSchema = require('../model/productModel')




router.get('/products', (req, res)=>{
    res.send('this is a get request')
})


router.post('/products', (req, res)=>{
   const newProduct = new productsSchema({
    name:req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    rating: req.body.rating
   })

   newProduct.save() 
   .then((product) =>{
    res.status(201).json(product)
   })
   .catch((err) => {
    res.status(400).json({ error: err.message})
   })
})



router.put('/products/:id', (req, res)=>{
    res.send('this is a put request')
})


router.delete('/products/:id', (req, res)=>{
    res.send('this is a delete request')
})

module.exports = router