import mongoose from 'mongoose'

const personalInformationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  bio: String,
  image: Object,
})

const educationAndSkillsSchema = new mongoose.Schema({
  bootcampMajor: String,
  bootcampLocation: String,
  graduationDate: String,
  yearsExperience: String,
  skills: String,
})

const interestsAndAvailabilitySchema = new mongoose.Schema({
  interests: [String],
  commitmentDays: String,
})

const userSchema = new mongoose.Schema({
  personalInformation: personalInformationSchema,
  educationAndSkills: educationAndSkillsSchema,
  interestsAndAvailability: interestsAndAvailabilitySchema,
})

// Create the User model using the user schema
const User = mongoose.model('User', userSchema)

// Export the User model
export default User
/*
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})
*/
