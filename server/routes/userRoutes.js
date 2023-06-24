import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import { protect } from '../middleware/authMiddleware.js'
import {
  registerUser,
  loginUser,
  getUser,
  updateUser,
} from '../controllers/userController.js'

// Route to register a new user
router.post('/', registerUser)
router.post('/login', loginUser)
router.route('/profile/:id').get(protect, getUser).put(protect, updateUser)

export default router
