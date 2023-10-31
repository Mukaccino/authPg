import RoleUsuario from "../models/rolesUsuario.js";

export const RoleUsuarioController = {

    getAllRolesUsuarios: async(req,res)=>{
        const result = await RoleUsuario.getAll();
        res.send(result.rows)
    },
    getRoleUsuarioByIdRol: async(req,res)=>{
        const {id} = req.params
        const result = await RoleUsuario.getByRol(id)
        res.status(200).send(result.rows)
    },
    getRoleUsuarioByIdUser: async(req,res)=>{
        const {role, user} = req.params
        const result = await RoleUsuario.getByUser(role, user)
        res.status(200).send(result.rows)
    },
    getRoleUsuarioByIdUserandRole: async(req,res)=>{
        const {role, user} = req.params
        const result = await RoleUsuario.getByUser(role, user)
        res.status(200).send(result.rows)
    },
    createRoleUsuario: async(req,res)=>{
        const {body} = req
        const result = await RoleUsuario.create(body)
        res.status(200).send(result.rows)
    },
    deleteRoleUsuario: async(req,res)=>{
        const {role, user} = req.params
        const result = await RoleUsuario.delete(role, user)
        res.status(200).send(result)
    }
}