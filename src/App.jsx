import { useState } from 'react'
import brainLogo from '/brain.svg'
import SignupForm from './SignupForm.jsx'
import GlobalStyles from './components/styles/Global.jsx'
import HeaderContent from './components/styles/HeaderContent.styled.jsx'
import Logo from './components/styles/Logo.styled.jsx'

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderContent>
        <a href='https://www.linkedin.com/in/jonamichahammo/' target='_blank'>
          <Logo src={brainLogo} className='logo' alt='Stepping Stones logo' />
        </a>
        <h1>STEPPING STONES</h1>
      </HeaderContent>
      <SignupForm />
      <footer>Copyright Stepping Stones 2023</footer>
    </>
  )
}

export default App
