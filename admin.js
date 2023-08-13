const express=require('express');
const router=express.Router();


router.get('/add-item',(req,res,next)=>{
    console.log("add item page ");
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>')
})
router.post('/product',(req,res,next)=>{

    console.log(req.body)
    res.redirect('/')
})
module.exports=router;