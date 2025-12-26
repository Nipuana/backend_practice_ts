import { UserRepository } from "../repositories/auth.repository";
import { CreateUserDto } from "../dtos/auth.dtos";
import bcrypt from 'bcryptjs';
let userRepository=new UserRepository
export class AuthService{
    async registerUser(data : CreateUserDto){
        //logic to register user, duplicate check, hash
        const emailExists= await userRepository.getUserByEmail(data.email);
        if(emailExists){
            throw new Error("Email already registered");
        }
        const usernameExists= await userRepository.getUserByUsername(data.username);
        if(usernameExists){
            throw new Error("Username already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(data.password, 10);//10-complexity
        data.password=hashedPassword; // replace plain text with hashed password
        
        const newUser= await userRepository.createUser(data);
        return newUser;
    }
}