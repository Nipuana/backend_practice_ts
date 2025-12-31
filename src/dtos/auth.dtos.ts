import z from "zod";
import  {userType, UserType} from "../types/auth.type";

export const CreateUserDto= userType.pick({
   firstName: true,
    lastName: true,
    username: true,
    email: true,
    password: true
}
).extend( // add new attribute to schema
    {
        confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long")
    }
).refine( // extra validation from existing attributes
    (data)=> data.password === data.confirmPassword,
    {
        message: "Password and Confirm Password do not match",
        path: ["confirmPassword"] // throws a error on confirmpassword field
    }
)
export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const LoginUserDto= z.object({
    email: z.email(),
    password: z.string().min(6)
});

export type LoginUserDto= z.infer<typeof LoginUserDto>;