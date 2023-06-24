import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

// store items like our Mongo URI and JWT secret privately
dotenv.config()

// Connect to database
connectDB()

// Allow all origins to access your API
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', userRoutes)

// Serve Frontend
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the frontend build directory
  // ties into the root package.json heroku-postbuild as well as the build script in frontend/ package.json
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  // Serve the index.html file for all other routes in production
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  // Default route for non-production environments
  app.get('/', (req, res) => {
    res.send('API is running on PORT 5000....')
  })
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
