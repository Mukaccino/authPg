import { Router } from "express";
const router = Router();
import { RoleController } from "../controllers/roles.controller.js";

router.get('/',RoleController.getAllRoles)
router.get('/:id',RoleController.getRoleById)
router.post('/',RoleController.createRole)
router.put('/:id', RoleController.updateRole)
router.delete('/:id', RoleController.deleteRole)

export default router;