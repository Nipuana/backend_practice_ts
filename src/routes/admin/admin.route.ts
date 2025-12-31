import { Router } from "express";
import { AdminUserController } from "../../controllers/admin/user.controller";

const router=Router();
const adminUserController=new AdminUserController();
router.post('/create-admin', adminUserController.createUser);

export default router;