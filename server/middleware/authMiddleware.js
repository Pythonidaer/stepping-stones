import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
  // Check if the authorization header is present
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  // Extract the token from the authorization header
  const token = authHeader.split(' ')[1]

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Attach the decoded user data to the request object
    req.user = decoded

    // Move to the next middleware or route handler
    next()
  } catch (error) {
    // Handle token verification errors
    console.error(error)
    res.status(401).json({ message: 'Unauthorized' })
  }
})
export { protect }
