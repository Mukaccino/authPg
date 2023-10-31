import { Router } from "express";
const router = Router();
import { UserController } from "../controllers/users.controller.js";
import * as authJwt from '../middlewares/authorization.js'

router.get('/',[authJwt.validadorToken],UserController.getAllUsers)
router.get('/:id',[authJwt.validadorToken],UserController.getUserById)
router.put('/:id',[authJwt.validadorToken, authJwt.isModerator] ,UserController.updateUser)
router.delete('/:id',[authJwt.validadorToken, authJwt.isAdmin]  ,UserController.deleteUser)

export default router;