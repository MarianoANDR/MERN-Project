import express from 'express';
import { goalRouter } from './routes/goalRoutes.js';
import { userRouter } from './routes/userRoutes.js';
import {errorHandle} from '../backend/middleware/errorMiddleware.js'; 
import colors from 'colors';
import { dbConnect } from './config/db.js';
import * as dotenv from 'dotenv';
dotenv.config();

dbConnect();

const app = express();

app.use(express.json()); // body parser 
app.use(express.urlencoded({extended: false})); // add middleware 

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);
 
app.use(errorHandle);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}!`)
})

