//routes would import controllers

import {Router,Express,Request,Response,NextFunction} from 'express'
import {middlewares,handlebooks, throwsError} from './controllers/books.controller';
import helmet from 'helmet'

function routes(app:Express){

//helmet is used to keep express apps secure, it adds headers good for security
app.use(helmet())

app.get('/:bookid/:Auth',(req:Request<{bookid:number,Auth:string},{},{name:string},{}>,res:Response)=>{
    req.params.bookid
    req.body.name
    const Bookid=req.params
    res.send(req.body.name);
});

app.post('/api/data',(req:Request,res:Response)=>{
    console.log(req.body);
    return res.status(200).send(req.body)
});

// we can chain requests like this it can be used for CRUD operations
app.route('/api/books')
                 
.get((req:Request,res:Response)=>{              //get a book
    return res.send('This is a get request')
})
.post((req:Request,res:Response)=>{             //insert a book
    return res.send('This is a post request')
})
.put((req:Request,res:Response)=>{              //update a book
    return res.send('This is a put request')
})

.delete((req:Request,res:Response)=>{              //delete a book
    return res.send('This is a delete request')
})
.all((req:Request,res:Response)=>{             
    res.sendStatus(404);   
})

//we need both middlewares and handlebook from controller to make this work
app.use(middlewares({name:'Benjamin Koshy'}));
app.get('/middleware',handlebooks)



// Handling Async Errors 
app.get('/errors',async(req,res)=>{

    //Wrap all the Async code in Try Catch and send Appopriate Error messages
    
        try{                    
            await throwsError();
            res.sendStatus(200)
        }
        catch(e){
            res.status(400).send('Error Detected')
        }
        
    });

}

export default(routes)