const express=require('express');
const route=express.Router();
const path=require('path');


route.get('/',(req,res,next)=>{
    console.log('Normal get request');
    res.sendFile(path.join(__dirname,'shop.html'))
})
route.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})
route.get('/complete',(req,res,next)=>{
    
    res.send("sucess")
})
module.exports=route;