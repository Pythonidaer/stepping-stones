import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body

  // Validation: Check if all required fields are provided
  if (!fullName || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  // Check if user with the same email already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash the user's password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create the user in the database
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  })

  // If user creation is successful, send a response with user details and a generated token
  if (user) {
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      //   token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export { registerUser }
