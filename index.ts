import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

// loads .env file contents into process.env
dotenv.config();

const PORT = process.env.PORT
const MONGO_DB = process.env.MONGO_DB

const connect = async() => {
    try {
        await mongoose.connect(`${MONGO_DB}`)
        console.log('Connection to mongoDB successful');
    } catch (error) {
        throw(error)
    }
}

//middlewares
app.use(cors());
// allow to send json
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('hello user');
})

app.listen(PORT, () => {
    connect();
    console.log(`app is running on port ${PORT}`);
})