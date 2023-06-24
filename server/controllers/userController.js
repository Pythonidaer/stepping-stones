import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

const registerUser = asyncHandler(async (req, res) => {
  const formData = req.body

  // Validation: Check if all required fields are provided
  if (
    !formData.personalInformation.fullName ||
    !formData.personalInformation.email ||
    !formData.personalInformation.password
  ) {
    // res.status(400)
    res
      .status(400)
      .json({ error: 'Please include full name, email and password fields' })
    throw new Error('Please include full name, email and password fields')
  }

  const email = formData.personalInformation.email

  // Check if user with the same email already exists
  const userExists = await User.findOne({
    'personalInformation.email': formData.personalInformation.email,
  })

  if (userExists) {
    // res.status(400)
    res.status(400).json({ error: 'A user already uses this email!' })
    throw new Error('A user already uses this email!')
  }

  // Hash the user's password
  const salt = await bcrypt.genSalt(10)
  // const hashedPassword = await bcrypt.hash(password, salt)
  const hashedPassword = await bcrypt.hash(
    formData.personalInformation.password,
    salt
  )

  // Create the user in the database
  const user = await User.create({
    personalInformation: {
      fullName: formData.personalInformation.fullName,
      email: formData.personalInformation.email,
      password: hashedPassword,
      bio: formData.personalInformation.bio,
      image: formData.personalInformation.image,
    },
    educationAndSkills: {
      bootcampMajor: formData.educationAndSkills.bootcampMajor,
      bootcampLocation: formData.educationAndSkills.bootcampLocation,
      graduationDate: formData.educationAndSkills.graduationDate,
      yearsExperience: formData.educationAndSkills.yearsExperience,
      skills: formData.educationAndSkills.skills,
    },
    interestsAndAvailability: {
      interests: formData.interestsAndAvailability.interests,
      commitmentDays: formData.interestsAndAvailability.commitmentDays,
    },
  })

  // If user creation is successful, send the user object in the response
  if (user) {
    // res.status(201).json(user)
    res.status(201).json({
      _id: user._id,
      fullName: user.personalInformation.fullName,
      email: user.personalInformation.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const formData = req.body
  const { email, password } = formData.personalInformation

  // Find the user in the database by their email
  const user = await User.findOne({ 'personalInformation.email': email })

  // Check if user exists and if the provided password matches the hashed password
  if (
    user &&
    (await bcrypt.compare(password, user.personalInformation.password))
  ) {
    // If the login is successful, send a response with user details and a generated token
    res.status(200).json({
      _id: user._id,
      fullName: user.personalInformation.fullName,
      email: user.personalInformation.email,
      token: generateToken(user._id),
    })
  } else {
    // If the login is unsuccessful, return an error response
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

const getUser = asyncHandler(async (req, res) => {
  const parts = req.originalUrl.split('/')
  const userId = parts[parts.length - 1]

  const user = await User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      res.json(user)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    })
  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }
})
const updateUser = asyncHandler(async (req, res) => {
  try {
    const userData = req.body
    const userId = userData._id

    const user = await User.findByIdAndUpdate(userId, userData, { new: true })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

export { registerUser, loginUser, getUser, updateUser }
