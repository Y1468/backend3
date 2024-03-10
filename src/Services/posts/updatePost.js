
import { prisma } from "../../Prisma";

export class UpdatePost{
    async execute({authorId,titulo,publicacao}){

        const updateposts=await prisma.post.update({
            where:{
                id:authorId,
            },
            data:{
                titulo:titulo,
                publicacao:publicacao
            }
        })

        return updateposts
    }
}