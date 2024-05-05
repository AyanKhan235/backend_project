import express from  'express'
import 
import cors from 'cors'
import cookie-parse from 'cookie-parse'


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
// img pdf for storing
app.use(express.static("public"))
app.use(cookieParser());



export {app} 