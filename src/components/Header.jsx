import React, { useContext } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import brainLogo from '../assets/brain.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Header() {
  const navigate = useNavigate()

  const { user, setAuthUser, clearAuthUser, getAuthUser } =
    useContext(AuthContext)
  const handleLogout = () => {
    clearAuthUser()
    navigate(`/`)
  }
  const goToProfile = () => {
    const user = getAuthUser()
    if (user) {
      navigate(`/profile/${user._id}`)
    }
    // console.log(user)
  }
  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/'>
            <img src={brainLogo} alt='Logo' height={40} />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>

          {user ? (
            <>
              <Button color='inherit' onClick={goToProfile}>
                Profile
              </Button>
              <Button color='inherit' onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color='inherit' component={Link} to='/login'>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
