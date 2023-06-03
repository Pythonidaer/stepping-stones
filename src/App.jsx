import { useState } from 'react'
import brainLogo from '/brain.svg'
import Form from './Form.jsx'
// import BackupForm from './BackupForm.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header-content'>
        <a href='https://www.linkedin.com/in/jonamichahammo/' target='_blank'>
          <img src={brainLogo} className='logo' alt='Stepping Stones logo' />
        </a>
        <h1>STEPPING STONES</h1>
      </div>
      <Form />
      {/* <BackupForm /> */}
    </>
  )
}

export default App
