import Users from "../models/user.js";

export const UserController = {

    getAllUsers: async(req,res)=>{
        const result = await Users.getAll();
        res.send(result.rows)
    },
    getUserById: async(req,res)=>{
        const {id} = req.params
        const result = await Users.getById(id)
        res.status(200).send(result.rows)
    },
    createUser: async(req,res)=>{
        const {body} = req
        const result = await Users.create(body)
        res.status(200).send(result)
    },
    updateUser: async(req,res)=>{
        const {id} = req.params
        const {body} = req
        const result = await Users.update(body, id)
        res.status(200).send(result.rows)
    },
    deleteUser: async(req,res)=>{
        const {id} = req.params
        const result = await Users.delete(id)
        res.status(200).send(result)
    }
}