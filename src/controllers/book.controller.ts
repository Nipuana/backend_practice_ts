import {Request,Response} from "express"
import { z } from "zod";
import { createBookDTO } from "../dtos/book.dtos"
import { Book } from "../types/book.type"
import { BookService } from "../services/book.service";
//Service implementation is to be used in controller

let bookService = new BookService()

export class BookController {
    createBook(req:Request,res:Response){
        try{
             const parsedBook=createBookDTO.safeParse(req.body)
        // Auto Validation
        if(!parsedBook.success){
            return res.status(400).json({errors: parsedBook.error})
        }
        const {id,title}= req.body //destructure

        const newBook: Book =bookService.createBook({id,title}) 
        return res.status(201).json(newBook)

        }catch(error:Error|any){
            return res.status(500).send(error.message ?? "Internal Server Error")
        }
    }
   
    getBooks=(req:Request,res:Response)=>{
    const requestedBooks: Book[]=bookService.getAllBooks()
    return res.status(200).json(requestedBooks)
}

}

