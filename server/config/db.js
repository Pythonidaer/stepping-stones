import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Connect to MongoDB using the provided MONGO_URI environment variable
    // const conn = await mongoose.connect(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1) // Exit the process with a failure status
  }
}

export default connectDB
/*
In this code, the connectDB function is defined, which is responsible for connecting to the MongoDB database using Mongoose.

Within the try block, the mongoose.connect() method is called with the MONGO_URI environment variable passed as the connection string. This establishes a connection to the MongoDB database.

If the connection is successful, a success message is logged to the console indicating the MongoDB host that the application is connected to.

If there is an error during the connection process, the catch block is executed. The error message is logged to the console, and the process is exited with a failure status (1) to indicate an error occurred during the connection.

Finally, the connectDB function is exported to be used in other files.
*/
