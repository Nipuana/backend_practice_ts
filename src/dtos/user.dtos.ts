import z from "zod"
import { UserSchema } from "../types/user.type"

//Input/Output Structure
export const createUserDTO=UserSchema.pick({id:true,username:true,email:true,name:true})
export type createUserDTO= z.infer<typeof createUserDTO>