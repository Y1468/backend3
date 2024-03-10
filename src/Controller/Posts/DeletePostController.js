import { DeletePost } from "../../Services/posts/deletePost";


export class DeletePostController{
    async handle(req,res){
        
        const authorId=req.query.authorId
        const deletPost=new DeletePost()

        const dPost=await deletPost.execute({
            authorId
        })

        return res.json(dPost)
    }
}