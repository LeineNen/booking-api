

import express from 'express'
import { bookingRouter } from './routes/all-routes.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'


// connect to mongodb database
await mongoose.connect(process.env.MONGO_URL)

const app = express()

const PORT = 3001

// use middlewares
app.use(cors())
app.use(express.json())
app.use(bookingRouter)




app.listen(PORT, () => console.log(`server is listening on ${PORT}`))