import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  const { user, getAuthUser } = useContext(AuthContext)

  // If user is authenticated, render the children components
  if (getAuthUser) return children

  // If user is not authenticated, navigate to the login page
  return <Navigate to='/login' />
  //   navigate(`/profile/${response.data._id}`)
}

export default PrivateRoute
