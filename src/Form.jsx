import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit, watch } = useForm()
  const onSubmit = async (data) => {
    // Need to survey Apps Script to see
    // If this data and be formatted and sent to Google Docs
    // Requires a lot of investigation though
    const formData = {
      personalInformation: data.personalInformation,
      educationAndSkills: data.educationAndSkills,
      interestsAndAvailability: data.interestsAndAvailability,
    }
    console.log(formData) // Array of form data objects
    const formattedData = JSON.stringify(data, null, 2)
    alert(formattedData)
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
    <div className='container'>
      <form id='Form1' onSubmit={handleSubmit(onSubmit)}>
        <h3>PERSONAL INFORMATION</h3>
        <input
          type='text'
          placeholder='Name'
          {...register('personalInformation.fullName')}
          required
        />
        <input
          type='email'
          placeholder='Email'
          {...register('personalInformation.email')}
          required
        />
        <input type='password' placeholder='Password' required />
        <input type='password' placeholder='Confirm Password' required />

        <textarea
          placeholder='Bio'
          id='bio'
          name='Bio'
          rows='4'
          cols='50'
          {...register('personalInformation.bio')}
        ></textarea>

        <label
          className='form-file-upload-button'
          htmlFor='profile-pic'
          role='button'
        >
          <div>Profile Picture</div>
        </label>
        <input
          type='file'
          hidden={true}
          id='profile-pic'
          name='Image'
          accept='image/*'
          {...register('personalInformation.image')}
        />
        <div className='w-file-upload-info'>Max file size 10MB. (optional)</div>

        <div className='btn-box'>
          <button type='button' id='Next1' onClick={handleNext1Click}>
            Next
          </button>
        </div>
      </form>
      <form id='Form2' onSubmit={handleSubmit(onSubmit)}>
        <h3>EDUCATION AND SKILLS</h3>
        <select
          id='bootcamp-major'
          className='bootcamp-major-field'
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
        </select>

        <input
          type='text'
          placeholder='Bootcamp Location'
          id='bootcamp-location'
          name='Location'
          {...register('educationAndSkills.bootcampLocation')}
        />

        <input
          type='text'
          placeholder='Graduation Date: mm/dd/yyyy'
          id='graduation-year'
          name='Graduation'
          {...register('educationAndSkills.graduationDate')}
        />

        <div className='experience-radio-options-border'>
          <label className='experience-radio-options-label'>
            Years of experience in bootcamp field:
          </label>
          <div className='experience-radio-options'>
            <label>
              <input
                type='radio'
                name='Experience'
                value='0-1'
                {...register('educationAndSkills.yearsExperience')}
              />
              <span>0-1</span>
            </label>

            <label>
              <input
                type='radio'
                name='Experience'
                value='1-3'
                {...register('educationAndSkills.yearsExperience')}
              />
              <span>1-3</span>
            </label>

            <label>
              <input
                type='radio'
                name='Experience'
                value='3+'
                {...register('educationAndSkills.yearsExperience')}
              />
              <span>3+</span>
            </label>
          </div>
        </div>
        <textarea
          id='skills'
          placeholder='Skills'
          name='Skills'
          rows='4'
          cols='50'
          {...register('educationAndSkills.skills')}
        ></textarea>
        <div className='btn-box'>
          <button type='button' id='Back1' onClick={handleBack1Click}>
            Back
          </button>
          <button type='button' id='Next2' onClick={handleNext2Click}>
            Next
          </button>
        </div>
      </form>
      <form id='Form3' onSubmit={handleSubmit(onSubmit)}>
        <h3>INTERESTS AND AVAILABILITY</h3>

        <div className='interests-checkbox-options-border'>
          <p className='interests'>Interests:</p>
          <div className='checkbox-options'>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='learning'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Learning New Skills</span>
            </label>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='seeking'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Seeking Employment</span>
            </label>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='hobby'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Hobby Building</span>
            </label>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='products'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Making Profitable Products</span>
            </label>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='networking'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Project Networking</span>
            </label>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='helping'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Helping Others</span>
            </label>
            <label>
              <input
                type='checkbox'
                name='Interests'
                value='unsure'
                {...register('interestsAndAvailability.interests')}
              />
              <span>Unsure</span>
            </label>
          </div>
        </div>
        <div className='commitment-days-range-border'>
          <label className='commitment-days' htmlFor='commitment-days'>
            Number of days a week you can commit to working on group projects:
          </label>
          <input
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
          <div className='commitment-days-value'>
            <span id='commitment-days-value'>1</span> day(s)
          </div>
        </div>
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
