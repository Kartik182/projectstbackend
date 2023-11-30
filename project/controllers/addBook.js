const bookData=require('../model/book');


exports.addBook=async(req,res)=>{
    try{
    const createData=await bookData.create(req.body)
    res.status(201).json(createData);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

}