import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'user') {
        const storedUser = event.newValue ? JSON.parse(event.newValue) : null
        setUser(storedUser)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const setAuthUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const getAuthUser = () => {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
    return null
  }

  const clearAuthUser = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, setAuthUser, clearAuthUser, getAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
