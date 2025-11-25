import { createUserDTO } from "../dtos/user.dtos";
import { User } from "../types/user.type";
import { IUserRepository,UserRepository } from "../repositories/user.repository";

let userRepository:IUserRepository=new UserRepository()

export class UserService{

    createUser(user:createUserDTO){
        const exist=userRepository.getUserById(user.id)
        if(exist){
            throw new Error("User ID already exists")
        }
        const newUser:User={
            id : user.id,
            username: user.username,
            email: user.email,
            name: user.name,
        };
        let created: User= userRepository.createUser(newUser)
        return created;
    }

    getAllUsers():User[]{
        let response : User[]=userRepository.getUsers()
        return response;
    }

    getUserById(id:string):User | undefined{
        let user=userRepository.getUserById(id);
        return user;
    }

    putUser(id:string, user:Partial<User>):User | undefined{
        let updatedUser=userRepository.putUser(id,user);
        return updatedUser;
    }
    updateUser(id:string, user:User):User | undefined{
        let updatedUser=userRepository.updateUser(id,user);
        return updatedUser;
    }
    deleteUser(id:string):boolean{
        let deleted=userRepository.deleteUser(id);
        return deleted;
    }
}