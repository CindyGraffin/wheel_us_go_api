import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('hello user');
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})