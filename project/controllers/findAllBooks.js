const bookData=require('../model/book');

exports.findAllBooks=async(req,res)=>{
    try{
        const books=await bookData.find({});
        res.status(200).json(books);
    }catch(error){
        res.status(500).json({message:error.message});

}
}