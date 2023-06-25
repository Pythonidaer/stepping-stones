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
    </>
  )
}

export default App
