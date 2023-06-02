import { useState } from 'react'
import brainLogo from '/brain.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={brainLogo} className='logo' alt='Vite logo' />
        </a>
      </div>
      <h1>Stepping Stones</h1>
    </>
  )
}

export default App
