<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupForm from './pages/SignupForm.jsx'
import LoginForm from './pages/LoginForm.jsx'
import Profile from './pages/Profile.jsx'
import Footer from './components/Footer.jsx'
import GlobalStyles from './components/styles/Global.jsx'
import Header from './components/Header.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from './context/AuthContext.jsx'
=======
import { useState } from 'react'
import brainLogo from '/brain.svg'
import Form from './Form.jsx'
// import BackupForm from './BackupForm.jsx'
import './App.css'
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#333333', // Set a darker grey color
    },
  },
})

function App() {
  return (
    <>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyles />
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<SignupForm />} />
            </Routes>
            <Routes>
              <Route path='/login' element={<LoginForm />} />
            </Routes>
            <Routes>
              <Route
                path='/profile/:id'
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </ThemeProvider>
=======
      <div className='header-content'>
        <a href='https://www.linkedin.com/in/jonamichahammo/' target='_blank'>
          <img src={brainLogo} className='logo' alt='Stepping Stones logo' />
        </a>
        <h1>STEPPING STONES</h1>
      </div>
      <Form />
      <footer>Copyright Stepping Stones 2023</footer>
      {/* <BackupForm /> */}
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next
    </>
  )
}

export default App
