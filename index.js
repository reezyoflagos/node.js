const express = require('express')//step 1: import the express app
const app = express()             //step 2: create a variabe called app and store the instace of espress or express function
const port = 9000                 //step 3: store your port in a variable
const productRoutes = require('./route/productsRoutes')
const mongoose = require('mongoose')

//mongoDB connection

mongoose.connect('mongodb+srv://oguguopeter:test1234@ecommerce.hgnydtd.mongodb.net/')
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', ()=>{console.log('database connected successfully')})

app.use(express.json()) 

app.use('/api', productRoutes)
app.listen(port, ()=>{
    console.log('server running at port 9000') //step 4: listen to your port
})