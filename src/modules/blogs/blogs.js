
import routers from 'express'
import { addBlogs, getBlogs } from './blogs.controllar.js'

const router = routers.Router()
router.get('/',getBlogs)
router.post('/addBlog',addBlogs)
export default router