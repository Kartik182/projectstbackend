const bookData=require('../model/book');



exports.findBooksById=async(req,res)=>{
    try{
        const{id}=req.params;
        const books=await bookData.findById(id);
        res.status(200).json(books);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}