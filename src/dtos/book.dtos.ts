//DTO-Data Transfer Object

import z from "zod"
import { BookSchema } from "../types/book.type"

//Inpu/Output Structure
export const createBookDTO=BookSchema.pick({id:true,title:true})
export type createBookDTO= z.infer<typeof createBookDTO>