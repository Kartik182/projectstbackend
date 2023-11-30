const express=require('express');
const router=express.Router();

const{addBook}=require("../controllers/addBook");
const{deleteBook}=require("../controllers/deleteBook");
const{findAllBooks}=require("../controllers/findAllBooks");
const{findBooksById}=require("../controllers/findBooksById");
const{updateBook}=require("../controllers/updateBook");

router.post("/post",addBook);
router.delete("/delete/:id",deleteBook);
router.get("/get",findAllBooks);
router.get("/get/:id",findBooksById);
router.put("/update/:id",updateBook);

module.exports=router;