import z from "zod"

export const UserSchema=z.object({
    id:z.string().min(1,{message:"ID is required"}),
    username:z.string().min(1,{message:"Username is required"}),
    email:z.email().min(1,{message:"Invalid email address"}),
    name:z.string().min(1,{message:"Name is required"}),
    age:z.number().optional()
})

export type User = z.infer<typeof UserSchema>