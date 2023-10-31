import {config} from 'dotenv'

config(); //para tener acceso al env

import app from './app.js'

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('hola mundo desde',port)
})