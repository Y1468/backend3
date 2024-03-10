import { prisma } from "../../Prisma";


export class PostService{
    async execute({titulo,publicacao,authorId}){

        const posts=await prisma.post.create({
            data:{
                titulo:titulo,
                publicacao:publicacao,
                authorId:authorId
            }
        })
        return posts
    }
}