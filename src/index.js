// require('dotenv').config({ path: './env' });


import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()













/*
import express from 'express'
const app= express();

// immedaite run function by iifee
// its semicolan to check clear code with new line 
;(async ()=>{
    try {
     await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("eror", error);
        throw err
     })

     app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
     })
    } catch (error) {
        console.error("Error: ", error);
        throw err
    }
})() */