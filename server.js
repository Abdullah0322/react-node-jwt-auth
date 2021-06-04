import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
const app = express()
import connectDB from './config/db.js'
import cors from 'cors';
app.use(express.json())
dotenv.config()
import userRoutes from './routes/userRoutes.js'
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  connectDB()
  app.use('/api/users', userRoutes)
  
  
 
app.use(cors());
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process  .env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
