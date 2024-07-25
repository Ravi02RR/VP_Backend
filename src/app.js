import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Env from './config/confo.js';
const app = express();

//cors setup

app.use(cors(
    {
        origin: Env.CORS_ORIGIN,
        credentials: true
    }
));

//jab form se data lena ho
app.use(express.json({
    limit: '50kb'
}));



//jab url se data aaye
app.use(express.urlencoded({
    extended: true,
    limit: '20kb'
}));



//some static file in public folder
app.use(express.static('public'));



//cookie parser
app.use(cookieParser());


export { app }