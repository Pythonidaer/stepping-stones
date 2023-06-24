import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import StepRow from './components/StepRow.jsx'
import Container from './components/styles/Container.styled.jsx'
import ButtonContainer from './components/styles/ButtonContainer.styled.jsx'
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
} from './components/styles/Form.styled.jsx'
import axios from 'axios'

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

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm()

  const onSubmit = async (data) => {
    // if (
    //   data.personalInformation.password !==
    //   data.personalInformation.confirmPassword
    // ) {
    //   alert('Passwords do not match!')
    // }
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

      console.log(response.data) // Optional: Handle
      console.log(response.data) // Optional: Handle
    } catch (error) {
      console.error(error)
    }
    // console.log(formData) // Array of form data objects
    const formattedData = JSON.stringify(data, null, 2)
    // console.log(formattedData)
    // alert(formattedData)
  }

  const watchAllFields = watch() // Watch all fields for changes

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
          {...register('personalInformation.email', { required: false })}
        />
        {/*
        {errors.personalInformation?.email && (
          <span>Please enter your email</span>
        )} */}
        <TextInput
          type='password'
          placeholder='Password'
          {...register('personalInformation.password', { required: false })}
        />
        <TextInput
          type='password'
          placeholder='Confirm Password'
          {...register('confirmPassword', {
            required: false,
            validate: (value) =>
              value === getValues('personalInformation.password') ||
              'Passwords do not match',
          })}
        />
        {/*
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )} */}
        <Textarea
          placeholder='Bio'
          id='bio'
          name='Bio'
          rows='4'
          cols='50'
          {...register('personalInformation.bio')}
        ></Textarea>
        {/*
        <FileUploadButton htmlFor='profile-pic' role='button'>
          <FileUploadButtonLabel>Profile Picture</FileUploadButtonLabel>
        </FileUploadButton>
        <TextInput
          type='file'
          hidden={true}
          id='profile-pic'
          name='Image'
          accept='image/*'
          {...register('personalInformation.image')}
        />
        <FileUploadInfo>Max file size 10MB. (optional)</FileUploadInfo>
  */}
        <ButtonContainer>
          <button type='button' id='Next1' onClick={handleNext1Click}>
            Next
          </button>
        </ButtonContainer>
      </Form>
      <Form id='Form2' onSubmit={handleSubmit(onSubmit)}>
        <Title>EDUCATION AND SKILLS</Title>
        <Select
          id='bootcamp-major'
          name='Major'
          defaultValue='option1'
          {...register('educationAndSkills.bootcampMajor')}
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
          name='Location'
          {...register('educationAndSkills.bootcampLocation')}
        />

        <TextInput
          type='text'
          placeholder='Graduation Date: mm/dd/yyyy'
          id='graduation-year'
          name='Graduation'
          {...register('educationAndSkills.graduationDate')}
        />

        <RadioOptionsBorder>
          <RadioOptionsLabel>
            Years of experience in bootcamp field:
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
          id='skills'
          placeholder='Skills'
          name='Skills'
          rows='4'
          cols='50'
          {...register('educationAndSkills.skills')}
        ></Textarea>
        <ButtonContainer>
          <button type='button' id='Back1' onClick={handleBack1Click}>
            Back
          </button>
          <button type='button' id='Next2' onClick={handleNext2Click}>
            Next
          </button>
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
            name='Commitment'
            min='1'
            max='7'
            {...register('interestsAndAvailability.commitmentDays')}
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

// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import StepRow from './components/StepRow.jsx'
// import Container from './components/styles/Container.styled.jsx'
// import ButtonContainer from './components/styles/ButtonContainer.styled.jsx'
// import {
//   Form,
//   Title,
//   TextInput,
//   Textarea,
//   FileUploadButton,
//   FileUploadButtonLabel,
//   FileUploadInfo,
//   Select,
//   RadioOptionsBorder,
//   RadioOptionsLabel,
//   RadioOptions,
//   RadioLabel,
//   RadioSpan,
//   CheckboxOptionsBorder,
//   Interests,
//   CheckboxOptions,
//   CheckboxLabel,
//   CommitmentDays,
//   CommitmentDaysBorder,
//   CommitmentDaysValue,
// } from './components/styles/Form.styled.jsx'

// const handleNext1Click = () => {
//   const form1 = document.getElementById('Form1')
//   const form2 = document.getElementById('Form2')
//   const progress = document.getElementById('progress')
//   form1.style.left = '-450px'
//   form2.style.left = '40px'
//   progress.style.width = '240px'
// }

// const handleBack1Click = () => {
//   const form1 = document.getElementById('Form1')
//   const form2 = document.getElementById('Form2')
//   const progress = document.getElementById('progress')
//   form1.style.left = '40px'
//   form2.style.left = '450px'
//   progress.style.width = '120px'
// }

// const handleNext2Click = () => {
//   const form2 = document.getElementById('Form2')
//   const form3 = document.getElementById('Form3')
//   const progress = document.getElementById('progress')
//   form2.style.left = '-450px'
//   form3.style.left = '40px'
//   progress.style.width = '360px'
// }

// const handleBack2Click = () => {
//   const form2 = document.getElementById('Form2')
//   const form3 = document.getElementById('Form3')
//   const progress = document.getElementById('progress')
//   form2.style.left = '40px'
//   form3.style.left = '450px'
//   progress.style.width = '240px'
// }

// const SignupForm = () => {
//   const { register, handleSubmit, watch } = useForm()

//   // const [fullName, setFullName] = useState('')
//   // const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState('')
//   // const [bio, setBio] = useState('')
//   // const [image, setImage] = useState({})
//   // const [bootcampMajor, setBootcampMajor] = useState('')
//   // const [bootcampLocation, setBootcampLocation] = useState('')
//   // const [graduationDate, setGraduationDate] = useState('')
//   // const [yearsExperience, setYearsExperience] = useState('')
//   // const [skills, setSkills] = useState('')
//   // const [interests, setInterests] = useState([])
//   // const [commitmentDays, setCommitmentDays] = useState('')

//   // State variable to store form data
//   // const [formData, setFormData] = useState({
//   //   fullName: '',
//   //   email: '',
//   //   password: '',
//   //   password2: '',
//   //   bio: '',
//   //   image: {},
//   //   bootcampMajor: '',
//   //   bootcampLocation: '',
//   //   graduationDate: '',
//   //   yearsExperience: '',
//   //   skills: '',
//   //   interests: [],
//   //   commitmentDays: '',
//   // })

//   // const [formData, setFormData] = useState({
//   //   personalInformation: {},
//   //   educationAndSkills: {},
//   //   interestsAndAvailability: {},
//   // })

//   const onSubmit = async (data) => {
//     const formData = {
//       personalInformation: data.personalInformation,
//       educationAndSkills: data.educationAndSkills,
//       interestsAndAvailability: data.interestsAndAvailability,
//     }
//     console.log(formData) // Array of form data objects
//     const formattedData = JSON.stringify(data, null, 2)
//     console.log(formattedData)
//     // alert(formattedData)
//   }

//   const watchAllFields = watch() // Watch all fields for changes

//   useEffect(() => {
//     const next1Button = document.getElementById('Next1')
//     const back1Button = document.getElementById('Back1')
//     const next2Button = document.getElementById('Next2')
//     const back2Button = document.getElementById('Back2')

//     next1Button.addEventListener('click', handleNext1Click)
//     back1Button.addEventListener('click', handleBack1Click)
//     next2Button.addEventListener('click', handleNext2Click)
//     back2Button.addEventListener('click', handleBack2Click)

//     return () => {
//       next1Button.removeEventListener('click', handleNext1Click)
//       back1Button.removeEventListener('click', handleBack1Click)
//       next2Button.removeEventListener('click', handleNext2Click)
//       back2Button.removeEventListener('click', handleBack2Click)
//     }
//   }, [])

//   return (
//     <Container>
//       <Form id='Form1' onSubmit={handleSubmit(onSubmit)}>
//         <Title>PERSONAL INFORMATION</Title>
//         <TextInput
//           type='text'
//           placeholder='Full Name'
//           {...register('personalInformation.fullName')}
//           required
//         />
//         <TextInput
//           type='email'
//           placeholder='Email'
//           {...register('personalInformation.email')}
//           required
//         />
//         <TextInput
//           type='password'
//           placeholder='Password'
//           {...register('personalInformation.password')}
//           required
//         />
//         <TextInput type='password' placeholder='Confirm Password' required />

//         <Textarea
//           placeholder='Bio'
//           id='bio'
//           name='Bio'
//           rows='4'
//           cols='50'
//           {...register('personalInformation.bio')}
//         ></Textarea>

//         <FileUploadButton htmlFor='profile-pic' role='button'>
//           <FileUploadButtonLabel>Profile Picture</FileUploadButtonLabel>
//         </FileUploadButton>
//         <TextInput
//           type='file'
//           hidden={true}
//           id='profile-pic'
//           name='Image'
//           accept='image/*'
//           {...register('personalInformation.image')}
//         />
//         <FileUploadInfo>Max file size 10MB. (optional)</FileUploadInfo>

//         <ButtonContainer>
//           <button type='button' id='Next1' onClick={handleNext1Click}>
//             Next
//           </button>
//         </ButtonContainer>
//       </Form>
//       <Form id='Form2' onSubmit={handleSubmit(onSubmit)}>
//         <Title>EDUCATION AND SKILLS</Title>
//         <Select
//           id='bootcamp-major'
//           name='Major'
//           defaultValue='option1'
//           {...register('educationAndSkills.bootcampMajor')}
//         >
//           <option value='option1' disabled={true}>
//             Bootcamp Major
//           </option>
//           <option value='webdev'>Web Development</option>
//           <option value='analytics'>Data Analytics</option>
//           <option value='cybersec'>Cybersecurity</option>
//           <option value='uxui'>UX/UI Design</option>
//           <option value='fintech'>Fintech</option>
//           <option value='marketing'>Digital Marketing</option>
//           <option value='projmanage'>Project Management</option>
//           <option value='none'>Did Not Attend</option>
//         </Select>

//         <TextInput
//           type='text'
//           placeholder='Bootcamp Location'
//           id='bootcamp-location'
//           name='Location'
//           {...register('educationAndSkills.bootcampLocation')}
//         />

//         <TextInput
//           type='text'
//           placeholder='Graduation Date: mm/dd/yyyy'
//           id='graduation-year'
//           name='Graduation'
//           {...register('educationAndSkills.graduationDate')}
//         />

//         <RadioOptionsBorder>
//           <RadioOptionsLabel>
//             Years of experience in bootcamp field:
//           </RadioOptionsLabel>
//           <RadioOptions>
//             <RadioLabel>
//               <TextInput
//                 type='radio'
//                 name='Experience'
//                 value='0-1'
//                 {...register('educationAndSkills.yearsExperience')}
//               />
//               <RadioSpan>0-1</RadioSpan>
//             </RadioLabel>

//             <RadioLabel>
//               <TextInput
//                 type='radio'
//                 name='Experience'
//                 value='1-3'
//                 {...register('educationAndSkills.yearsExperience')}
//               />
//               <RadioSpan>1-3</RadioSpan>
//             </RadioLabel>

//             <RadioLabel>
//               <TextInput
//                 type='radio'
//                 name='Experience'
//                 value='3+'
//                 {...register('educationAndSkills.yearsExperience')}
//               />
//               <RadioSpan>3+</RadioSpan>
//             </RadioLabel>
//           </RadioOptions>
//         </RadioOptionsBorder>
//         <Textarea
//           id='skills'
//           placeholder='Skills'
//           name='Skills'
//           rows='4'
//           cols='50'
//           {...register('educationAndSkills.skills')}
//         ></Textarea>
//         <ButtonContainer>
//           <button type='button' id='Back1' onClick={handleBack1Click}>
//             Back
//           </button>
//           <button type='button' id='Next2' onClick={handleNext2Click}>
//             Next
//           </button>
//         </ButtonContainer>
//       </Form>
//       <Form id='Form3' onSubmit={handleSubmit(onSubmit)}>
//         <Title>INTERESTS AND AVAILABILITY</Title>

//         <CheckboxOptionsBorder>
//           <Interests>Interests:</Interests>
//           <CheckboxOptions>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='learning'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Learning New Skills</span>
//             </CheckboxLabel>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='seeking'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Seeking Employment</span>
//             </CheckboxLabel>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='hobby'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Hobby Building</span>
//             </CheckboxLabel>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='products'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Making Profitable Products</span>
//             </CheckboxLabel>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='networking'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Project Networking</span>
//             </CheckboxLabel>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='helping'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Helping Others</span>
//             </CheckboxLabel>
//             <CheckboxLabel>
//               <TextInput
//                 type='checkbox'
//                 name='Interests'
//                 value='unsure'
//                 {...register('interestsAndAvailability.interests')}
//               />
//               <span>Unsure</span>
//             </CheckboxLabel>
//           </CheckboxOptions>
//         </CheckboxOptionsBorder>
//         <CommitmentDaysBorder>
//           <CommitmentDays htmlFor='commitment-days'>
//             Number of days a week you can commit to working on group projects:
//           </CommitmentDays>
//           <TextInput
//             type='range'
//             id='commitment-days'
//             name='Commitment'
//             min='1'
//             max='7'
//             {...register('interestsAndAvailability.commitmentDays')}
//             onChange={(e) => {
//               const value = e.target.value
//               document.getElementById('commitment-days-value').textContent =
//                 value
//             }}
//           />
//           <CommitmentDaysValue>
//             <span id='commitment-days-value'>1</span> day(s)
//           </CommitmentDaysValue>
//         </CommitmentDaysBorder>
//         <ButtonContainer>
//           <button type='button' id='Back2' onClick={handleBack2Click}>
//             Back
//           </button>
//           <button type='submit'>Submit</button>
//         </ButtonContainer>
//       </Form>
//       <StepRow />
//     </Container>
//   )
// }

// export default SignupForm
