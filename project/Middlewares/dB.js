const mongoose =require('mongoose')
const config=require('../config/default.json')
const uri=config.DB_STRING
exports.connectTodB=()=>{
mongoose.connect(uri,{
})
.then(()=>console.log('Database connect hogya'))
.catch(()=> console.log("error aa gya"))
}