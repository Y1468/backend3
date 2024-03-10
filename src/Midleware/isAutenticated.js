
import express  from "express";
import { verify } from "jsonwebtoken";


export function isAutenticated(req,res,next){
    
    let autentique=req.headers.authorization

    if (!autentique) {
        return res.status(401).end()
    }

    const [, token]=autentique.split(' ')

    try {

        const {sub}=verify(
            token,
            process.env.JWT_SECRET
        )

        req.autor_id=sub
        return next()

    } catch (error) {
        return res.status(401).end()
    }
}