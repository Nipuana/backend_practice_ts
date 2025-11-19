import express,{Application,Request,Response} from 'express';
import bookRoutes from './routes/book.route'

const app:Application = express();
const PORT:number = 3000;

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello world');
});


app.get('/api/books',(req:Request,res:Response)=>
{
    const books=[{id:'0-1',name:"Aauish"}]
    return res.status(200).json(books)
})
app.use('/api/books',bookRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});

