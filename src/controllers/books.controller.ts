//controllers would import the services

import { NextFunction,Request,Response } from "express"

// checking out middlewares
//Added Middleware in controller the rount is in routes
const middlewares=({name}:{name:string})=>
    (req:Request,res:Response,next:NextFunction)=>{
        res.locals.name=name
        next();
    }
function handlebooks(req:Request,res:Response, next:NextFunction){

        console.log(res.locals.name)
        
        res.send(res.locals.name)
        
    }

//throwing error in controller try catch block will be in the routes
    async function throwsError(){
        throw new Error('Error found!')
    }

export {handlebooks,middlewares,throwsError}

