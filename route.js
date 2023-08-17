const express=require('express');
const route=express.Router();
const path=require('path');

route.get('/add-product',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'add.html'))
})
route.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports=route;