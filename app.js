
const express= require('express')
const app=express();

app.listen(3030);
const user=[{id:1, name:"sanjay"}, {id:2, name:"riya"},{id:3, name:"prachi"}];
app.get('/',(req,res)=>{
    
    res.send('<h1>sanjay</h1>');
})
