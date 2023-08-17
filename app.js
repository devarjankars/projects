const path=require('path');
const express= require('express')
const adminRoute=require('./route.js');
const normalRoute=require('./shop.js');
const bodyparser=require('body-parser')
const app=express();

app.listen(3030);

app.use(bodyparser.urlencoded({extended:false}))

 app.use('/admin',adminRoute);
 app.use('/',normalRoute);
 
 app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'error.html'));
 })
