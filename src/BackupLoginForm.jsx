import React, { useState } from 'react'
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   makeStyles,
// } from '@material-ui/core'
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

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(4),
//   },
//   formField: {
//     marginBottom: theme.spacing(2),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }))

const LoginForm = () => {
  //   const classes = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
      const response = await axios.post(
        'http://localhost:5000/api/users',
        formData
      )

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

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     // Handle login logic here
  //     console.log('Username:', username)
  //     console.log('Password:', password)
  //     // Reset form fields
  //     setUsername('')
  //     setPassword('')
  //   }

  return (
    <Container>
      <Form id='Form1' onSubmit={handleSubmit(onSubmit)}>
        <Title>PERSONAL INFORMATION</Title>

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

/*
BACKUP
    <Container maxWidth='xs'>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <Typography variant='h5' component='h2' gutterBottom>
          Login
        </Typography>
        <TextField
          label='Username'
          variant='outlined'
          className={classes.formField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label='Password'
          variant='outlined'
          className={classes.formField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submitButton}
        >
          Login
        </Button>
      </form>
    </Container>
    */
// import React, { useState } from 'react'
// import {
//   Container,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   makeStyles,
// } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   cardContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(4),
//     backgroundColor: '#fff',
//     padding: theme.spacing(2),
//     borderRadius: theme.spacing(1),
//   },
//   formField: {
//     marginBottom: theme.spacing(2),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }))

// const LoginForm = () => {
//   const classes = useStyles()
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle login logic here
//     console.log('Username:', username)
//     console.log('Password:', password)
//     // Reset form fields
//     setUsername('')
//     setPassword('')
//   }

//   return (
//     <Container maxWidth='xs'>
//       <Card className={classes.cardContainer}>
//         <CardContent>
//           <Typography variant='h5' component='h2' gutterBottom>
//             Login
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label='Username'
//               variant='outlined'
//               className={classes.formField}
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <TextField
//               label='Password'
//               variant='outlined'
//               className={classes.formField}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type='password'
//               required
//             />
//             <Button
//               type='submit'
//               variant='contained'
//               color='primary'
//               className={classes.submitButton}
//             >
//               Login
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   )
// }

// export default LoginForm
