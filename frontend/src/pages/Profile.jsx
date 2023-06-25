import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext.jsx'
import { Button, TextField, Typography, Box } from '@mui/material'

const Profile = () => {
  const { setAuthUser, clearAuthUser, getAuthUser } = useContext(AuthContext)

  const user = getAuthUser()
  const { token } = user
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(true)
  const [editable, setEditable] = useState(false)
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/profile/${user._id}`)
        setUserData(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUser()
  }, [user._id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        `/api/users/profile/${user._id}`,
        userData
      )
      console.log('Data updated:', response.data)
      setEditable(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = () => {
    setEditable(true)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    const [section, field] = name.split('.')

    setUserData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }))
  }

  if (!user || loading) {
    return <div>Loading...</div>
  }

  // Destructure userData and use it in JSX
  const { personalInformation, educationAndSkills, interestsAndAvailability } =
    userData

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: '90%',
          maxWidth: '400px',
          bgcolor: 'white',
          p: 2,
          boxSizing: 'border-box',
          m: '4% auto 0',
          borderRadius: '5px',
        }}
      >
        <Typography variant='h5'>Personal Information</Typography>
        <TextField
          type='text'
          name='personalInformation.fullName'
          value={personalInformation.fullName}
          disabled={!editable}
          onChange={handleChange}
          label='Full Name'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          type='email'
          name='personalInformation.email'
          value={personalInformation.email}
          disabled={!editable}
          onChange={handleChange}
          label='Email'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          name='personalInformation.bio'
          value={personalInformation.bio}
          disabled={!editable}
          onChange={handleChange}
          label='Bio'
          variant='outlined'
          multiline
          rows={4}
          fullWidth
          margin='normal'
        />
      </Box>
      <Box
        sx={{
          width: '90%',
          maxWidth: '400px',
          bgcolor: 'white',
          p: 2,
          boxSizing: 'border-box',
          m: '16px auto 0',
          borderRadius: '5px',
        }}
      >
        <Typography variant='h5'>Education and Skills</Typography>
        <TextField
          type='text'
          name='educationAndSkills.bootcampMajor'
          value={educationAndSkills.bootcampMajor}
          disabled={!editable}
          onChange={handleChange}
          label='Bootcamp Major'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          type='text'
          name='educationAndSkills.bootcampLocation'
          value={educationAndSkills.bootcampLocation}
          disabled={!editable}
          onChange={handleChange}
          label='Bootcamp Location'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          type='text'
          name='educationAndSkills.graduationDate'
          value={educationAndSkills.graduationDate}
          disabled={!editable}
          onChange={handleChange}
          label='Graduation Date'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          type='text'
          name='educationAndSkills.yearsExperience'
          value={educationAndSkills.yearsExperience}
          disabled={!editable}
          onChange={handleChange}
          label='Years of Experience'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          type='text'
          name='educationAndSkills.skills'
          value={educationAndSkills.skills}
          disabled={!editable}
          onChange={handleChange}
          label='Skills'
          variant='outlined'
          fullWidth
          margin='normal'
        />
      </Box>
      <Box
        sx={{
          width: '90%',
          maxWidth: '400px',
          bgcolor: 'white',
          p: 2,
          boxSizing: 'border-box',
          m: '16px auto 0',
          borderRadius: '5px',
        }}
      >
        <Typography variant='h5'>Interests and Availability</Typography>
        <TextField
          type='text'
          name='interestsAndAvailability.interests'
          value={interestsAndAvailability.interests}
          disabled={!editable}
          onChange={handleChange}
          label='Interests'
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <TextField
          type='text'
          name='interestsAndAvailability.commitmentDays'
          value={interestsAndAvailability.commitmentDays}
          disabled={!editable}
          onChange={handleChange}
          label='Commitment Days'
          variant='outlined'
          fullWidth
          margin='normal'
        />
      </Box>
      <Box
        sx={{
          width: '90%',
          maxWidth: '400px',
          bgcolor: 'white',
          p: 2,
          boxSizing: 'border-box',
          m: '16px auto 0',
          borderRadius: '5px',
        }}
      >
        {editable ? (
          <div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                mr: 2,
              }}
            >
              Update Data
            </Button>
            <Button
              type='button'
              onClick={() => setEditable(false)}
              variant='outlined'
              color='secondary'
            >
              Close
            </Button>
          </div>
        ) : (
          <Button
            type='button'
            onClick={handleEdit}
            variant='contained'
            color='primary'
          >
            Edit Data
          </Button>
        )}
      </Box>
    </form>
  )
}

export default Profile
/*
    <div>
      <h2>Personal Information</h2>
      <p>Full Name: {personalInformation.fullName}</p>
      <p>Email: {personalInformation.email}</p>
      <p>Bio: {personalInformation.bio}</p>

      <h2>Education and Skills</h2>
      <p>Bootcamp Major: {educationAndSkills.bootcampMajor}</p>
      <p>Bootcamp Location: {educationAndSkills.bootcampLocation}</p>
      <p>Graduation Date: {educationAndSkills.graduationDate}</p>
      <p>Years of Experience: {educationAndSkills.yearsExperience}</p>
      <p>Skills: {educationAndSkills.skills}</p>

      <h2>Interests and Availability</h2>
      <p>Interests: {interestsAndAvailability.interests.join(', ')}</p>
      <p>Commitment Days: {interestsAndAvailability.commitmentDays}</p>
    </div>
    */
/*
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Personal Information</h2>
        <p>
          Full Name:{' '}
          <input
            type='text'
            name='fullName'
            value={personalInformation.fullName}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Email:{' '}
          <input
            type='email'
            name='email'
            value={personalInformation.email}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Bio:{' '}
          <textarea
            name='bio'
            value={personalInformation.bio}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
      </div>

      <div>
        <h2>Education and Skills</h2>
        <p>
          Bootcamp Major:{' '}
          <input
            type='text'
            name='bootcampMajor'
            value={educationAndSkills.bootcampMajor}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Bootcamp Location:{' '}
          <input
            type='text'
            name='bootcampLocation'
            value={educationAndSkills.bootcampLocation}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Graduation Date:{' '}
          <input
            type='text'
            name='graduationDate'
            value={educationAndSkills.graduationDate}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Years of Experience:{' '}
          <input
            type='text'
            name='yearsExperience'
            value={educationAndSkills.yearsExperience}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Skills:{' '}
          <input
            type='text'
            name='skills'
            value={educationAndSkills.skills}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
      </div>

      <div>
        <h2>Interests and Availability</h2>
        <p>
          Interests:{' '}
          <input
            type='text'
            name='interests'
            value={interestsAndAvailability.interests.join(', ')}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
        <p>
          Commitment Days:{' '}
          <input
            type='text'
            name='commitmentDays'
            value={interestsAndAvailability.commitmentDays}
            disabled={!editable}
            onChange={handleChange}
          />
        </p>
      </div>

      {editable ? (
        <div>
          <button type='submit'>Update Data</button>
          <button type='button' onClick={() => setEditable(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <button type='button' onClick={handleEdit}>
          Edit Data
        </button>
      )}
    </form>
    */
