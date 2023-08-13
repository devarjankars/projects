const express=require('express');
const route=express.Router();

route.get('/',(req,res,next) =>{
  console.log("The Middelever Fun");
  res.send('<h1>Welcome to Node js</h1>')
  })
   module.exports=route