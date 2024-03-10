import { prisma } from "../../Prisma";
import { hash } from "bcryptjs";

export class UserService{

    async execute({name,email,password}){

            if (!email) {
                throw new Error('Email invalido')
            }

            let exsistsEmail=await prisma.user.findFirst({
                where:{
                    email:email
                }
            })

            if (exsistsEmail) {
                throw new Error('Esse email ja esista')
            }

            const hashPass=await hash(password,8)
         
            const user=await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:hashPass
            }
        })

        return user

    }

}
