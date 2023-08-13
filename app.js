
const express= require('express')
const app=express();
const bodyparser=require('body-parser')
app.listen(3030);
app.use(bodyparser.urlencoded({extended:false}))
const adminroute=require('./admin')
const Droute=require('./routes');
app.use('/admin', adminroute)
app.use(Droute);
app.use('/',(req,res)=>{
    res.status(404).send('<h1>Page not found</h1>');
})