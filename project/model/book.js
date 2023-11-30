const mongoose=require('mongoose');
const book=new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    author:{type:String,reuired:true},
    language:{type:String},
    genre:{type:String}
})
module.exports =mongoose.model('BookStore',book)