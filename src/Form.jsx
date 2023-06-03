import React, { useEffect } from 'react'

const handleNext1Click = () => {
  const form1 = document.getElementById('Form1')
  const form2 = document.getElementById('Form2')
  const progress = document.getElementById('progress')
  form1.style.left = '-450px'
  form2.style.left = '40px'
  progress.style.width = '240px'
}

const handleBack1Click = () => {
  const form1 = document.getElementById('Form1')
  const form2 = document.getElementById('Form2')
  const progress = document.getElementById('progress')
  form1.style.left = '40px'
  form2.style.left = '450px'
  progress.style.width = '120px'
}

const handleNext2Click = () => {
  const form2 = document.getElementById('Form2')
  const form3 = document.getElementById('Form3')
  const progress = document.getElementById('progress')
  form2.style.left = '-450px'
  form3.style.left = '40px'
  progress.style.width = '360px'
}

const handleBack2Click = () => {
  const form2 = document.getElementById('Form2')
  const form3 = document.getElementById('Form3')
  const progress = document.getElementById('progress')
  form2.style.left = '40px'
  form3.style.left = '450px'
  progress.style.width = '240px'
}

const Form = () => {
  useEffect(() => {
    const next1Button = document.getElementById('Next1')
    const back1Button = document.getElementById('Back1')
    const next2Button = document.getElementById('Next2')
    const back2Button = document.getElementById('Back2')

    next1Button.addEventListener('click', handleNext1Click)
    back1Button.addEventListener('click', handleBack1Click)
    next2Button.addEventListener('click', handleNext2Click)
    back2Button.addEventListener('click', handleBack2Click)

    return () => {
      next1Button.removeEventListener('click', handleNext1Click)
      back1Button.removeEventListener('click', handleBack1Click)
      next2Button.removeEventListener('click', handleNext2Click)
      back2Button.removeEventListener('click', handleBack2Click)
    }
  }, [])
  return (
    <div className='container'>
      <form id='Form1'>
        <h3>CREATE ACCOUNT</h3>
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <input type='password' placeholder='Confirm Password' required />

        <div className='btn-box'>
          <button type='button' id='Next1' onClick={handleNext1Click}>
            Next
          </button>
        </div>
      </form>
      <form id='Form2'>
        <h3>SOCIAL LINKS</h3>
        <input type='url' placeholder='Medum' />
        <input type='url' placeholder='GitHub' />
        <input type='url' placeholder='LinkedIn' />

        <div className='btn-box'>
          <button type='button' id='Back1' onClick={handleBack1Click}>
            Back
          </button>
          <button type='button' id='Next2' onClick={handleNext2Click}>
            Next
          </button>
        </div>
      </form>
      <form id='Form3'>
        <h3>PERSONAL INFO</h3>
        <input type='text' placeholder='First Name' required />
        <input type='text' placeholder='Last Name' required />
        <input type='tel' placeholder='Mobile No.' required />

        <div className='btn-box'>
          <button type='button' id='Back2' onClick={handleBack2Click}>
            Back
          </button>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <div className='step-row'>
        <div id='progress'></div>
        <div className='step-col'>
          <small>Step 1</small>
        </div>
        <div className='step-col'>
          <small>Step 2</small>
        </div>
        <div className='step-col'>
          <small>Step 3</small>
        </div>
      </div>
    </div>
  )
}

export default Form
