
import express ,{NextFunction, Request,Response} from 'express'
import routes from './routes';
import { middlewares } from './controllers/books.controller';


const app=express()

const port=3000


app.use(express.json())
routes(app)                 //Encountered a bug where get request does not work in chain requests even in this file had to remove
                            // routes(app) to make get request to work. tried a diff method to import routes but didn't work either.








app.listen(port,()=>{
    console.log(`Server is running at http://localhost:3000/`)
})

