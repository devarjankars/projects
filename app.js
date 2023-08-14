
const express= require('express')
const app=express();
const bodyparser=require('body-parser')
app.listen(3030);
app.use(bodyparser.urlencoded({extended:false}))


app.get ('/login',(req,res,next)=>{
    console.log('ON the Login Page');
    res.send('<form action ="/" method="POST"><input type="text"><button type="submit">Log-In</button></form>')
})
app.post('/',(req,res,next)=>{
    console.log('home page')
    console.log(req.body)

})