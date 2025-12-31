import { AuthService } from "../services/auth.service";
import { CreateUserDto } from "../dtos/auth.dtos";
import  z, { success } from "zod";
import { Request, Response } from "express";
let authService = new AuthService();

export class AuthController{

    async registerUser(req: Request, res: Response){
        try{
            const pasedData=CreateUserDto.safeParse(req.body);
            if(!pasedData.success){
                return res.status(400).json({
                    success: false, message: z.prettifyError(pasedData.error)
                });
            }

            const newUser= await authService.registerUser(pasedData.data);
            return res.status(201).json({
                success:true, data: newUser, message:" Registered Successfully"}
            )}catch( error:Error | any){ 
            return res.status(error.statusCode).json(
                {success:false, message: error.message || "Internal Server Error"});
            }
    }
}