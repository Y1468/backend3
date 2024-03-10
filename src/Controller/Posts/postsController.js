import { PostService } from "../../Services/posts/postService";


export class PostsController{
    async handle(req,res){

        const {titulo,publicacao,authorId}=req.body

        let post=new PostService()

        const postsControle=await post.execute({
             titulo,
             publicacao,
             authorId
        })

        return res.json(postsControle)
    }
}