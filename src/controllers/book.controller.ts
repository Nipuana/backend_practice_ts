import {Request,Response} from "express"
export type Book={
    id:string,
    name:string,
    date?:string
}

let  books:Book[]=[
    {id:'0-1',name:"Aauish"},
    {id:'0-2',name:"Sujul"},
    {id:'0-3',name:"Potter",date:"2024-10-10"}
]
export class BookController {
    getbooks(req:Request,res:Response) 
{   
   const requestedBooks: Book[]=books
    return res.status(200).json(requestedBooks)
}}