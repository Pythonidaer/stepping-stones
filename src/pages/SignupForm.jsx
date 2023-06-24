import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import StepRow from '../components/StepRow.jsx'
import Container from '../components/styles/Container.styled.jsx'
import ButtonContainer from '../components/styles/ButtonContainer.styled.jsx'
import {
  Form,
  Title,
  TextInput,
  Textarea,
  FileUploadButton,
  FileUploadButtonLabel,
  FileUploadInfo,
  Select,
  RadioOptionsBorder,
  RadioOptionsLabel,
  RadioOptions,
  RadioLabel,
  RadioSpan,
  CheckboxOptionsBorder,
  Interests,
  CheckboxOptions,
  CheckboxLabel,
  CommitmentDays,
  CommitmentDaysBorder,
  CommitmentDaysValue,
} from '../components/styles/Form.styled.jsx'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext.jsx'

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

<<<<<<< HEAD:src/pages/SignupForm.jsx
const SignupForm = () => {
  const navigate = useNavigate()
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const { user, setAuthUser, clearAuthUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm()

  const onSubmit = async (data) => {
    if (
      data.personalInformation.password !==
      data.personalInformation.confirmPassword
    ) {
      alert('Passwords do not match!')
      return
    }
    const formData = {
      personalInformation: data.personalInformation,
      educationAndSkills: data.educationAndSkills,
      interestsAndAvailability: data.interestsAndAvailability,
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/users`, formData)

      if (response) {
        setAuthUser(response.data)
        navigate('/profile')
      }

      console.log(response.data) // Optional: Handle
    } catch (error) {
      if (error.response && error.response.data.error) {
        const errorMessage = error.response.data.error
        alert(errorMessage)
        // Display error message to the user using Toastify or other methods
        // ...
      }
    }
  }

  const watchAllFields = watch() // Watch all fields for changes

=======
const Form = () => {
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
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
<<<<<<< HEAD:src/pages/SignupForm.jsx
    <Container>
      <Form id='Form1' onSubmit={handleSubmit(onSubmit)}>
        <Title>PERSONAL INFORMATION</Title>
        <TextInput
          type='text'
          placeholder='Full Name'
          {...register('personalInformation.fullName')}
          required
        />
        <TextInput
          type='email'
          placeholder='Email'
          {...register('personalInformation.email')}
        />
        <TextInput
          type='password'
          placeholder='Password'
          {...register('personalInformation.password')}
        />
        <TextInput
          type='password'
          placeholder='Confirm Password'
          {...register('personalInformation.confirmPassword')}
        />
        <Textarea
=======
    <div className='container'>
      <form id='Form1'>
        <h3>PERSONAL INFORMATION</h3>
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <input type='password' placeholder='Confirm Password' required />

        <textarea
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
          placeholder='Bio'
          id='bio'
          name='bio'
          rows='4'
          cols='50'
<<<<<<< HEAD:src/pages/SignupForm.jsx
          {...register('personalInformation.bio')}
        ></Textarea>
        {/*
        <FileUploadButton htmlFor='profile-pic' role='button'>
          <FileUploadButtonLabel>Profile Picture</FileUploadButtonLabel>
        </FileUploadButton>
        <TextInput
=======
        ></textarea>

        <label
          className='form-file-upload-button'
          htmlFor='profile-pic'
          role='button'
        >
          <div>Profile Picture</div>
        </label>
        <input
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
          type='file'
          hidden={true}
          id='profile-pic'
          name='profile-pic'
          accept='image/*'
        />
        <FileUploadInfo>Max file size 10MB. (optional)</FileUploadInfo>
  */}
        <ButtonContainer>
          <button type='button' id='Next1' onClick={handleNext1Click}>
            Next
          </button>
<<<<<<< HEAD:src/pages/SignupForm.jsx
        </ButtonContainer>
      </Form>
      <Form id='Form2' onSubmit={handleSubmit(onSubmit)}>
        <Title>EDUCATION AND SKILLS</Title>
        <Select
          id='bootcamp-major'
          name='Major'
=======
        </div>
      </form>
      <form id='Form2'>
        <h3>EDUCATION AND SKILLS</h3>
        <select
          id='bootcamp-major'
          className='bootcamp-major-field'
          name='bootcamp-major'
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
          defaultValue='option1'
        >
          <option value='option1' disabled={true}>
            Bootcamp Major
          </option>
          <option value='webdev'>Web Development</option>
          <option value='analytics'>Data Analytics</option>
          <option value='cybersec'>Cybersecurity</option>
          <option value='uxui'>UX/UI Design</option>
          <option value='fintech'>Fintech</option>
          <option value='marketing'>Digital Marketing</option>
          <option value='projmanage'>Project Management</option>
          <option value='none'>Did Not Attend</option>
        </Select>

        <TextInput
          type='text'
          placeholder='Bootcamp Location'
          id='bootcamp-location'
          name='bootcamp-location'
        />

        <TextInput
          type='text'
          placeholder='Bootcamp Location: mm/dd/yyyy'
          id='graduation-year'
          name='graduation-year'
        />

        <RadioOptionsBorder>
          <RadioOptionsLabel>
            Years of experience in bootcamp field:
<<<<<<< HEAD:src/pages/SignupForm.jsx
          </RadioOptionsLabel>
          <RadioOptions>
            <RadioLabel>
              <TextInput
                type='radio'
                name='Experience'
                value='0-1'
                {...register('educationAndSkills.yearsExperience')}
              />
              <RadioSpan>0-1</RadioSpan>
            </RadioLabel>

            <RadioLabel>
              <TextInput
                type='radio'
                name='Experience'
                value='1-3'
                {...register('educationAndSkills.yearsExperience')}
              />
              <RadioSpan>1-3</RadioSpan>
            </RadioLabel>

            <RadioLabel>
              <TextInput
                type='radio'
                name='Experience'
                value='3+'
                {...register('educationAndSkills.yearsExperience')}
              />
              <RadioSpan>3+</RadioSpan>
            </RadioLabel>
          </RadioOptions>
        </RadioOptionsBorder>
        <Textarea
=======
          </label>
          <div className='experience-radio-options'>
            <label>
              <input type='radio' name='experience' value='0-1' />
              <span>0-1</span>
            </label>

            <label>
              <input type='radio' name='experience' value='1-3' />
              <span>1-3</span>
            </label>

            <label>
              <input type='radio' name='experience' value='3+' />
              <span>3+</span>
            </label>
          </div>
        </div>
        <textarea
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
          id='skills'
          placeholder='Skills'
          name='skills'
          rows='4'
          cols='50'
<<<<<<< HEAD:src/pages/SignupForm.jsx
          {...register('educationAndSkills.skills')}
        ></Textarea>
        <ButtonContainer>
=======
        ></textarea>
        <div className='btn-box'>
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
          <button type='button' id='Back1' onClick={handleBack1Click}>
            Back
          </button>
          <button type='button' id='Next2' onClick={handleNext2Click}>
            Next
          </button>
<<<<<<< HEAD:src/pages/SignupForm.jsx
        </ButtonContainer>
      </Form>
      <Form id='Form3' onSubmit={handleSubmit(onSubmit)}>
        <Title>INTERESTS AND AVAILABILITY</Title>

        <CheckboxOptionsBorder>
          <Interests>Interests:</Interests>
          <CheckboxOptions>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='learning'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Learning New Skills</span>
            </CheckboxLabel>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='seeking'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Seeking Employment</span>
            </CheckboxLabel>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='hobby'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Hobby Building</span>
            </CheckboxLabel>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='products'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Making Profitable Products</span>
            </CheckboxLabel>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='networking'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Project Networking</span>
            </CheckboxLabel>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='helping'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Helping Others</span>
            </CheckboxLabel>
            <CheckboxLabel>
              <TextInput
                type='checkbox'
                name='Interests'
                value='unsure'
                {...register('interestsAndAvailability.interests')}
              />
=======
        </div>
      </form>
      <form id='Form3'>
        <h3>INTERESTS AND AVAILABILITY</h3>

        <div className='interests-checkbox-options-border'>
          <p className='interests'>Interests:</p>
          <div className='checkbox-options'>
            <label>
              <input type='checkbox' name='interests' value='learning' />
              <span>Learning New Skills</span>
            </label>
            <label>
              <input type='checkbox' name='interests' value='seeking' />
              <span>Seeking Employment</span>
            </label>
            <label>
              <input type='checkbox' name='interests' value='hobby' />
              <span>Hobby Building</span>
            </label>
            <label>
              <input type='checkbox' name='interests' value='products' />
              <span>Making Profitable Products</span>
            </label>
            <label>
              <input type='checkbox' name='interests' value='networking' />
              <span>Project Networking</span>
            </label>
            <label>
              <input type='checkbox' name='interests' value='helping' />
              <span>Helping Others</span>
            </label>
            <label>
              <input type='checkbox' name='interests' value='unsure' />
>>>>>>> parent of ff8fa0b... Incorporated React-Hook-Form and should do styled-components next:src/Form.jsx
              <span>Unsure</span>
            </CheckboxLabel>
          </CheckboxOptions>
        </CheckboxOptionsBorder>
        <CommitmentDaysBorder>
          <CommitmentDays htmlFor='commitment-days'>
            Number of days a week you can commit to working on group projects:
          </CommitmentDays>
          <TextInput
            type='range'
            id='commitment-days'
            name='commitment-days'
            min='1'
            max='7'
            onChange={(e) => {
              const value = e.target.value
              document.getElementById('commitment-days-value').textContent =
                value
            }}
          />
          <CommitmentDaysValue>
            <span id='commitment-days-value'>1</span> day(s)
          </CommitmentDaysValue>
        </CommitmentDaysBorder>
        <ButtonContainer>
          <button type='button' id='Back2' onClick={handleBack2Click}>
            Back
          </button>
          <button type='submit'>Submit</button>
        </ButtonContainer>
      </Form>
      <StepRow />
    </Container>
  )
}

export default SignupForm
