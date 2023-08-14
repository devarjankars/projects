const express=require('express');
const fs=require('fs')
const app=express();
const bodyparser=require('body-parser')
app.listen(3030);

app.use(bodyparser.urlencoded())

app.get ('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data="NO chat Exists";
        }
        console.log('ON the Login Page');
        res.send(`${data}<form action ="/" method="POST" onsubmit="document.getElementById(username).value=localStorage.getItem('username')" >
        <input type="text" name="message" id ="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Log-In</button></form>`)
    })
   
});
app.post('/',(req,res,next)=>{
    console.log('home page')
    console.log(req.body.username)
    console.log();("name",req.body.message);
    fs.writeFile('username.txt',`${req.body.username}:-${req.body.message}`,{flag: 'a'},(err)=>{
        err ? console.log(err): res.redirect('/');
    })
   
})

app.get('/login',(req,res)=>{
    res.send(`<form action ="/" method="POST" onsubmit="document.getElementById(username).value=localStorage.setItem('username')" > 
        <input type="txt" name="username" placeholder="username" id="username">
        <button type="submit">Log-In</button></form>`)

})
