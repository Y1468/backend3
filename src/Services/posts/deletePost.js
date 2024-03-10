import { prisma } from "../../Prisma";


export class DeletePost{
    async execute({authorId}){
        
        const deletUser=await prisma.post.delete({
            where:{
                id:authorId
            },   
        })

        return deletUser
    }
}