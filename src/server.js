import express from 'express'
import 'express-async-errors'
import { router } from './router'

import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors())
app.use(router)

app.use((err,req,res,next)=>{
     
     if (err instanceof Error) {
        return res.status(400).json({
            error:err.message
        })
     }

        return res.status(500).json({
           status:'error',
           message:'Internall server error'
     })
})


app.listen(3333,()=>console.log('Servidor online'))