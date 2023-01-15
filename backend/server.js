import express from 'express';
import { goalRouter } from './routes/goalRoutes.js';
import {errorHandle} from '../backend/middleware/errorMiddleware.js' 
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json()); // body parser 
app.use(express.urlencoded({extended: false})); // add middleware 

app.use('/api/goals', goalRouter);

app.use(errorHandle);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}!`)
})

