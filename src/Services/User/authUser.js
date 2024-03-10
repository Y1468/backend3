import { prisma } from "../../Prisma"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

export class AuthUser{
    async execute({email,password}){

       const user=await prisma.user.findFirst({
          where:{
            email:email
          }
       })

       if (!user) {
          throw new Error('Usuario ou senha invalidos')
       }

       const passworHash=await compare(password,user.password)

       if (!passworHash) {
          throw new Error('Usuario ou senha invalidos')
       }

       const token=sign(
          {
            name:user.name,
            email:user.email
          },

          process.env.JWT_SECRET,

          {
            subject:user.id,
            expiresIn:'30d' 
          }
       )
        
        return{
           id:user.id,
           name:user.name,
           email:user.email,
           token:token
        }
    }
}

