import { Router,Request,Response } from "express";
import { UserController } from "./Controller/User/userController";
import { AuthController } from "./Controller/User/authController";
import { DatailController } from "./Controller/User/datailController";
import { isAutenticated } from "./Midleware/isAutenticated";
import { PostsController } from "./Controller/Posts/postsController";
import { ListPostController } from "./Controller/Posts/listPostsController";
import { UpdateController } from "./Controller/Posts/updateController";
import { DeletePostController } from "./Controller/Posts/DeletePostController";

const router=Router()

router.post('/test',new UserController().handle)
router.post('/auth',new AuthController().handle)
router.get('/datail',isAutenticated,new DatailController().handle)

//Posts
router.post('/postar',isAutenticated,new PostsController().handle)
router.get('/listpost',isAutenticated,new ListPostController().handle)
router.put('/uppost',isAutenticated,new UpdateController().handle)
router.delete('/deletpost',isAutenticated,new DeletePostController().handle)

export {router}