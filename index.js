const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const data =  require("./models/schema");
const route = require("./routes/route");

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static("views"))
app.use(express.static("assets"))



const mongo = "mongodb://127.0.0.1:27017/login-db";
mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("db connected")
    app.listen(3008,()=>{
        console.log("server is ready")
    })
}).catch(err=>console.log(ërr))


app.use(route)

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
