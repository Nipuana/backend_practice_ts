//Data source and queries are done in repository

import { title } from "process";
import { Book } from "../types/book.type";

let  books:Book[]=[
    {id:'0-1',title:"Aauish"},
    {id:'0-2',title:"Sujul"},
    {id:'0-3',title:"Potter",date:"2024-10-10"}
]

export interface IBookRepository{
    createBook(book:Book):Book;
    getBooks():Book[];
    getBookById(id:string):Book | undefined;
}

export class BookRepository implements IBookRepository{
    createBook(book:Book):Book{
        books.push(book);
        return book;
    }


    getBooks():Book[]{
        return books;
    }
    getBookById(id:string):Book | undefined{
        const book=books.find((book)=>book.id===id);
        return book;
    }
}

