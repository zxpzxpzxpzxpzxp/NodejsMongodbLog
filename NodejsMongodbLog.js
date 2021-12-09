const express = require("express")
const app=express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
const schema = {
    name: String,
    age: Number,
    health: String,
    hobby:String
}
const mydata = mongoose.model('cat1s', schema);
const kitty = new mydata({ name: 'Zildjian2' });
kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})
app.listen(10435)
