import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'

dotenv.config()
// test
// Connect to database
connectDB()

// Import data from arrays into database
const importData = async () => {
  try {
    // Clear existing data from collections
    await User.deleteMany()

    // Insert users data into User collection and get the created users
    const createdUsers = await User.insertMany(users)

    // Get the ID of the first created user (assuming it's the admin user)
    // const adminUser = createdUsers[0]._id

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// Delete all data from collections
const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// Determine if importing or destroying data based on command-line argument
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
