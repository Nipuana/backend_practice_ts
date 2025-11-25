import express,{Application,Request,Response} from 'express';
import bookRoutes from './routes/book.route'
import userRoutes from './routes/user.route'

const app:Application = express();
const PORT:number = 3000;

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello world');
});
app.use('/api/books',bookRoutes)
app.use('/api/users',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});

