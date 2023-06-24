import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import Container from '../components/styles/Container.styled.jsx'
import ButtonContainer from '../components/styles/ButtonContainer.styled.jsx'
import { Form, Title, TextInput } from '../components/styles/Form.styled.jsx'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext.jsx'

const LoginForm = () => {
  const navigate = useNavigate()
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  /* removed from package.json
    // "proxy": "http://127.0.0.1:5000/",
    */

  const { user, setAuthUser, clearAuthUser, getAuthUser } =
    useContext(AuthContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm()

  const onSubmit = async (data) => {
    const formData = {
      personalInformation: data.personalInformation,
    }

    try {
      //   const response = await axios.post(`/api/users/login`, formData)
      const response = await axios.post(`${API_BASE_URL}/users/login`, formData)
      console.log(response)

      if (response) {
        setAuthUser(response.data)
        console.log(getAuthUser())
        navigate(`/profile/${response.data._id}`)
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

  return (
    <Container>
      <Form id='Form1' onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

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

        <ButtonContainer>
          <button type='submit'>Submit</button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}

export default LoginForm
