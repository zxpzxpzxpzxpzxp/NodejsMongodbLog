const express = require("express")
const app=express()
const mongoose = require('mongoose')
const ejs=require('ejs')
mongoose.connect('mongodb://172.21.2.236:27017/190110910435')
const schema = {
    name: String,
    age: Number,
    health: String,
    hobby:String
}
const mydata = mongoose.model('cat1s', schema);
// const kitty = new mydata({ name: 'Zildjian2' });
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    // res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name:req.query.first,health:req.query.second});
    kitty.save()
    // ejs.renderFile(filename, data, options, function(err, str){
    //     // str => 输出渲染后的 HTML 字符串
    // });
    ejs.renderFile("result.html",{returnVal:"success"},(err,str)=>{
        res.send(str)
    })
})
app.listen(10435)
