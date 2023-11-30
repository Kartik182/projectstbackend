const bookData=require('../model/book');


exports.deleteBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const books=await bookData.findByIdAndDelete(id);
        if(!books){
            return res.status(404).json({message:`cannot find book by ${id}`})
        }
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}