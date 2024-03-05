import {deleteUser,updateUser,getUsers,addUsers} from './user.controllar.js';
import routers from 'express'
const router = routers.Router()

router.get("/getUsers",getUsers)
router.delete("/deleteUser",deleteUser)
router.patch("/updateUser",updateUser)
router.post("/addUsers",addUsers)
export default router