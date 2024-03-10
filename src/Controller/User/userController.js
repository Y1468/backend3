
import { prisma } from "../../Prisma";
import { UserService } from "../../Services/User/userService";


export class UserController{
    async handle(req,res){

             const {name,email,password}=req.body
             const userServs=new UserService()

             const user=await userServs.execute({
                name,
                email,
                password
             })

            return res.json(user)
       }
  }