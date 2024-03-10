import { DatailUser } from "../../Services/User/datailUser";


export class DatailController{
    async handle(req,res){
         
        const autor_id=req.autor_id
        const datail=new DatailUser()

        const user=await datail.execute(autor_id)

        return res.json(user)
    }
}