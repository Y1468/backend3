
import { prisma } from "../../Prisma";

export class ListPostService{
    async execute({authorId}){

        const listPosts=await prisma.post.findFirst({
           where:{
               authorId:authorId
           },
           select:{
              titulo:true,
              publicacao:true
           }
        })

        return listPosts
    }
}