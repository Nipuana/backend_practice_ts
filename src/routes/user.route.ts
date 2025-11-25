import {Router,Request,Response} from "express"
import {UserController} from "../controllers/user.controller";

export const router = Router();
const userController = new UserController();


// POST new user - 
router.post('/c',userController.createBook );

router.get('/g',userController.getUsers );

// GET single user - 
router.get('/g/:id', userController.getUserById );

// PUT update user - 
router.put('/api/users/:id',userController.putUser);

// DELETE user - 
router.delete('/api/users/:id',userController.deleteUser);

export default router;