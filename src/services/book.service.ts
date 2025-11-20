// Transforming data after fetching from repository before sending to controller
// Middleware between repository and controller

import { createBookDTO } from "../dtos/book.dtos";
import { Book } from "../types/book.type";
import { IBookRepository, BookRepository } from "../repositories/book.repository";


let bookRepository: IBookRepository= new BookRepository()

export class BookService{
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