import { ListPostService } from "../../Services/posts/listPostService";


export class ListPostController{
    async handle(req,res){
         
        let author=req.query.authorId
        let listPost=new ListPostService()

        const list=await listPost.execute({
            author
        })

        return res.json(list)
    }
}