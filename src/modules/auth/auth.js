import {login,signup} from './auth.controllar.js';
import routers from 'express'
const router = routers.Router()
router.post('/login', login)
router.post('/signup', signup)

export default router