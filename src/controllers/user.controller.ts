
import { Request, Response } from 'express';
import { createUserDTO } from '../dtos/user.dtos';
import { User } from '../types/user.type';
import { BookService } from '../services/book.service';
import { UserService } from '../services/user.service';

let userService = new UserService();


export class UserController {


createBook(req:Request, res:Response)  {
  
  try{
    const parsedUser=createUserDTO.safeParse(req.body)
    if(!parsedUser.success){
        return res.status(400).json({errors: parsedUser.error})
    }
    const {id,username,email,name}= req.body //destructure
  
 const newUser : User =userService.createUser({id,username,email,name});
 return res.status(201).json(newUser);

}catch(error:Error|any){
    return res.status(500).send(error.message ?? "Internal Server Error")
}

};

getUsers=(req:Request, res:Response) =>{
    const requestedUsers: User[]=userService.getAllUsers()
    return res.status(200).json(requestedUsers)
}

getUserById(req:Request, res:Response) {
    const userId:string=req.params.id
    const user:User | undefined=userService.getUserById(userId)
    return res.status(200).json(user)
};


putUser(req:Request, res:Response) {
    const id = req.params.id;
    const userUpdates: Partial<User> = req.body;
    const updatedUser = userService.putUser(id, userUpdates);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(updatedUser);
};


deleteUser(req:Request,res:Response) {
    const id = req.params.id;
    const isDeleted = userService.deleteUser(id);
    if (!isDeleted) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(204).send("User deleted successfully");
};
}

