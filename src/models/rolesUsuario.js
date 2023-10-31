import { pool } from "../libs/db.js";
import { json } from "express";

 const RoleUsuario = {

    getAll: async()=>{
        try{
           const result = await pool.query(`SELECT * FROM roles_usuarios`) 
           return result;
        }
        catch(err){
            return err;
        }
    },
    getByRol:async(id)=>{
        try{
            const result = await pool.query(`SELECT * FROM roles_usuarios WHERE id_rol=$1`,[id]) 
            return result
        }
        catch(err){
            return err;
        }
    },
    getByUser:async(id)=>{
      try{
          const result = await pool.query(`SELECT * FROM roles_usuarios WHERE id_user=$1`,[id]) 
          return result
      }
      catch(err){
          return err;
      }
  },
  getByUserRoles:async(id_rol,id_user)=>{
    try{
        const result = await pool.query(`SELECT * FROM roles_usuarios WHERE id_rol=$1 AND id_user= $2 `,[id_rol,id_user]) 
        return result
    }
    catch(err){
        return err;
    }
},

    create: async(data)=>{
        const {id_rol,id_user} = data
        console.log(data)
        try{
            const result = await pool.query(`INSERT INTO roles_usuarios(id_rol,id_user) VALUES ($1,$2)`,[id_rol,id_user]);
            if(result){
                return json({message:'el usuario fue creado correctamente'})
            }
        }
        catch(err){
            return err;
        }
    },
      delete: async (id_rol,id_user) => {
        try {
          const result = await pool.query(`DELETE FROM roles_usuarios WHERE id_rol=$1 AND id_user= $2 `,[id_rol,id_user]);
      
          if (result.rowCount > 0) {
            // Si rowCount es mayor que 0, indica que se eliminó al menos una fila
            return { success: true, message: 'Eliminación exitosa' };
          } else {
            throw new Error('No se eliminó ningún registro');
          }
        } catch (err) {
          return { success: false, message: err.message };
        }
      }
      



}

export default RoleUsuario;