
import { prisma } from "../../Prisma";


export class DatailUser{
    async execute(autor_id){

        let user=await prisma.user.findFirst({
            where:{
                id:autor_id
            },
            select:{
                id:true,
                name:true,
                email:true
            }
        })

        return user
    }
}