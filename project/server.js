const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const dB=require('./Middlewares/dB.js')
dB.connectTodB();
const bookRoutes=require("./routes/bookRoutes");
app.use("",bookRoutes)

app.listen(3000,()=>{
    console.log(`Server started on 3000`);
 });