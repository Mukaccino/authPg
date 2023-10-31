import  express  from "express";
const app = express(); //tener una instancia de express para hacer uso de la libreria
import userRoutes from './src/routes/users.routes.js'
import roleRoutes from './src/routes/roles.routes.js'
import authRoutes from './src/routes/auth.routes.js'

app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes)


export default app;