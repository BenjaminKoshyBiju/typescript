import express from 'express'

// import routes from '../router/routes'

const app=express()

const port=3000
// app.use('/',routes)

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Helllllllooooos')
});

app.post('/api/data',(req,res)=>{
    console.log(req.body);
    return res.sendStatus(200)
});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:3000/`)
})

