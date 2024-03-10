import { AuthUser } from "../../Services/User/authUser";

export class AuthController{
    async handle(req,res){
        
        const {email,password}=req.body
        const authUser=new AuthUser()

        const auth=await authUser.execute({
            email,
            password
        })

        return res.json(auth)
        
    }
}