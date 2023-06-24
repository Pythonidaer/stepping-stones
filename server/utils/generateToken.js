import jwt from 'jsonwebtoken'

// Function to generate a JSON Web Token (JWT) with the provided ID
const generateToken = (id) => {
  // Generate a token without expiresIn option
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

export default generateToken
