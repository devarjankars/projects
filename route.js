const express=require('express');
const route=express.Router();
const path=require('path');
const items=[];
route.get('/add-product',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'add.html'))
})
route.post('/add-product',(req,res,next)=>{
  items.push({title:req.body.title});
    console.log(items);
    res.redirect('/');
})


module.exports=route;