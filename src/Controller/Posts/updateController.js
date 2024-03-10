
import { UpdatePost } from "../../Services/posts/updatePost";


export class UpdateController{
    async handle(req,res){

        let {authorId,titulo,publicacao}=req.body
        let updatePost=new UpdatePost()

        const update=await updatePost.execute({
            authorId,
            titulo,
            publicacao
        })

        return res.json(update)
    }
}