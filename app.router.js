import { connection } from "./DB/connection.js"
import UserRouter from './src/modules/users/users.js'
import authRouter from './src/modules/auth/auth.js'
import blogRouter from './src/modules/blogs/blogs.js'
const initapp = (app,express)=>{
    app.use(express.json())
    connection()
    app.get('/',(req,res)=>{return res.json({massege:"welcom home page"})})
    app.use('/users',UserRouter)
    app.use('/auth',authRouter)
    app.use('/blogs',blogRouter)
    app.use('*',(req,res)=>{
        res.json({massege:"this page not found"})
    })
}
export default  initapp