const dotenv = require('dotenv');
dotenv.config(); 
const express = require('express');
const app = express()
const connectToDb = require("./db/db");
const cors = require('cors');
const userroutes = require("./routes/user.routes");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
connectToDb();

app.get('/',(req,res)=>{
    res.send("hello world");
})
// app.use("/user",userroutes)
module.exports=app;