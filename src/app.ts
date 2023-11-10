import express ,{Request,Response} from 'express'

// import routes from '../router/routes'

const app=express()

const port=3000
// app.use('/',routes)

app.use(express.json())
app.get('/',(req:Request,res:Response)=>{
    res.send('Helllllllooooos')
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


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:3000/`)
})

