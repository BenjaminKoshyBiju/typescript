import { error } from 'console';
import express ,{NextFunction, Request,Response} from 'express'

// import routes from '../router/routes'

const app=express()

const port=3000
// app.use('/',routes)

app.use(express.json())
app.get('/:bookid/:Auth',(req:Request<{bookid:number,Auth:string},{},{name:string},{}>,res:Response)=>{
    req.params.bookid
    req.body.name
    const Bookid=req.params
    res.send(req.body.name);
});

app.post('/api/data',(req,res)=>{
    console.log(req.body);
    return res.sendStatus(200)
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

// checking out middlewares
const middlewares=({name}:{name:string})=>
    (req:Request,res:Response,next:NextFunction)=>{
        res.locals.name=name
        next();
    }

app.use(middlewares({name:'Benjamin Koshy'}));

app.get('/middleware', (req:Request,res:Response)=>{

    console.log(res.locals.name)
    
    res.send(res.locals.name)
    
})
// Handling Async Errors 
async function throwsError(){
    throw new Error('Error found!')
}
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

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:3000/`)
})

