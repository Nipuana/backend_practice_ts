// Transforming data after fetching from repository before sending to controller
// Middleware between repository and controller

import { createBookDTO } from "../dtos/book.dtos";
import { Book } from "../types/book.type";
import { IBookRepository, BookRepository } from "../repositories/book.repository";


let bookRepository: IBookRepository= new BookRepository()

export class BookService{
    

    createBook(book:createBookDTO){
        const exist=bookRepository.getBookById(book.id)
    
        if(exist){
            throw new Error("Book ID already exists")
        }
        const newBook:Book={
            id : book.id,
            title: book.title
        };
        let created: Book= bookRepository.createBook(newBook)
        
        // latter transform/ mapping can be done here
        
        return created
    }
    
    getAllBooks():Book[]{
        let response : Book[]=bookRepository.getBooks()
        .map
           ((book)=>{
                return{
                    ...book,
                    title: book.title.toUpperCase()
                }
            })

        return response;
    }
}