import {Request,Response} from "express"
import { z } from "zod";
import { createBookDTO } from "../dtos/book.dtos"
import { Book } from "../types/book.type"



// export type Book={
//     id:string,title:string,date?:string
// }

let  books:Book[]=[
    {id:'0-1',title:"Aauish"},
    {id:'0-2',title:"Sujul"},
    {id:'0-3',title:"Potter",date:"2024-10-10"}
]
export class BookController {
    createBook(req:Request,res:Response){

        const parsedBook=createBookDTO.safeParse(req.body)
        // Auto Validation
        if(!parsedBook.success){
            return res.status(400).json({errors: parsedBook.error})
        }
        const {id,title}= req.body //destructure
        
        
        // if(!title){
        //     return res.status(400).json({message:"Title is required"})
        // }
        // if(!id){
        //     return res.status(400).json({message:"ID is required"})
        // }
        
        
        
        const checkId: boolean = books.some((book)=>book.id===id)
        if(checkId){
            return res.status(409).json({message:"Book with this ID already exists"})
        }
        const newbook: Book={id, title};
        books.push(newbook)
        return res.status(201).json(newbook)
    }
   
    getBooks=(req:Request,res:Response)=>{
    const requestedBooks: Book[]=books
    return res.status(200).json(requestedBooks)
}

}

