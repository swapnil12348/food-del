import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//app config
const app=express()
const PORT= process.env.PORT ||4000

//middleware
app.use(express.json())
app.use(cors({
  origin: [
    'https://food-del-frontend-kamc.onrender.com',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
}))

// db connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter)

// Fix for image serving with proper headers
app.use("/images", (req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
}, express.static('uploads'))

app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
