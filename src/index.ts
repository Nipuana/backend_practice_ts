import express,{Application,Request,Response} from 'express';
import { connectDB } from './database/mongodb';
import dotenv from 'dotenv'
import bodyParser = require('body-parser');
dotenv.config();
console.log(process.env.PORT);
//.env->PORT = 5050

import bookRoutes from './routes/book.route'
import userRoutes from './routes/user.route'
import authRoutes from './routes/auth.route'

const app:Application = express();
const PORT:number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello world');
});
app.use('/api/books',bookRoutes)
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)

async function startServer(){
    await connectDB();
    app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
}

startServer()



