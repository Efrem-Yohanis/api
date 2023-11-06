const express = require('express')
const app = express()
app.use(express.json())

app.listen(3000)

app.get('/api/v1/getAllUser',(req,res)=>{
   
       res.status(200).json({name:"Efrem"})
   
   
 })