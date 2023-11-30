const bookData=require('../model/book');

exports.updateBook=async(req,res)=>{
    try {
        const{id}=req.params;
        const books=await bookData.findByIdAndUpdate(id,req.body);
        if(!books){
            return res.status(404).json({message:`cannot find book by ${id}`})
        }
        const updatedBooks=await bookData.findById(id);
        res.status(200).json(updatedBooks);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}