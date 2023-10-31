import Role from "../models/role.js";

export const RoleController = {

    getAllRoles: async(req,res)=>{
        const result = await Role.getAll();
        res.send(result.rows)
    },
    getRoleById: async(req,res)=>{
        const {id} = req.params
        const result = await Role.getById(id)
        res.status(200).send(result.rows)
    },
    createRole: async(req,res)=>{
        const {body} = req
        const result = await Role.create(body)
        res.status(200).send(result.rows)
    },
    updateRole: async(req,res)=>{
        const {id} = req.params
        const {body} = req
        const result = await Role.update(body, id)
        res.status(200).send(result.rows)
    },
    deleteRole: async(req,res)=>{
        const {id} = req.params
        const result = await Role.delete(id)
        res.status(200).send(result)
    }
}