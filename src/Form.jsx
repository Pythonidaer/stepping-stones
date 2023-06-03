import React from 'react'

const Form = () => {
  return (
    <form>
      <fieldset>
        <legend>Personal Information</legend>

        <label htmlFor='fullname'>Full Name:</label>
        <input type='text' id='fullname' name='fullname' required />
        <br />
        <br />
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />
        <br />
        <br />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          minLength='8'
        />
        <br />
        <br />

        <label htmlFor='bio'>Bio:</label>
        <textarea id='bio' name='bio' rows='4' cols='50'></textarea>
        <br />
        <br />

        <label htmlFor='profile-pic'>Profile Picture:</label>
        <input
          type='file'
          id='profile-pic'
          name='profile-pic'
          accept='image/*'
        />
        <br />
        <br />

        <label htmlFor='github'>GitHub:</label>
        <input type='url' id='github' name='github' />
        <br />
        <br />

        <label htmlFor='linkedin'>LinkedIn:</label>
        <input type='url' id='linkedin' name='linkedin' />
        <br />
        <br />

        <label htmlFor='portfolio'>Portfolio:</label>
        <input type='url' id='portfolio' name='portfolio' />
        <br />
        <br />

        <label htmlFor='social-media'>Additional Social Media:</label>
        <input type='url' id='social-media' name='social-media' />
        <br />
        <br />
      </fieldset>

      <fieldset>
        <legend>Education</legend>

        <label htmlFor='bootcamp-major'>Bootcamp Major:</label>
        <select id='bootcamp-major' name='bootcamp-major'>
          <option value='webdev'>Web Development</option>
          <option value='analytics'>Data Analytics</option>
          <option value='cybersec'>Cybersecurity</option>
          <option value='uxui'>UX/UI Design</option>
          <option value='fintech'>Fintech</option>
          <option value='marketing'>Digital Marketing</option>
          <option value='projmanage'>Project Management</option>
        </select>
        <br />

        <br />

        <label htmlFor='bootcamp-location'>Bootcamp Location:</label>
        <input type='text' id='bootcamp-location' name='bootcamp-location' />
        <br />

        <br />
        <label htmlFor='graduation-year'>Graduation Year:</label>
        <input type='date' id='graduation-year' name='graduation-year' />

        <br />

        <br />
        <label>Years of experience in bootcamp field:</label>
        <br />

        <label>
          <input type='radio' name='experience' value='0-1' />
          0-1 years
        </label>
        <br />

        <label>
          <input type='radio' name='experience' value='1-3' />
          1-3 years
        </label>
        <br />

        <label>
          <input type='radio' name='experience' value='3+' />
          3+ years
        </label>
      </fieldset>

      <fieldset>
        <legend>Skills</legend>
        <label htmlFor='skills'>Skills:</label>
        <br />
        <textarea id='skills' name='skills' rows='4' cols='50'></textarea>
        <p>Interests:</p>
        <label>
          <input type='checkbox' name='interests' value='learning' /> Learning
          New Skills
        </label>
        <br />
        <label>
          <input type='checkbox' name='interests' value='seeking' /> Seeking
          Employment
        </label>
        <br />
        <label>
          <input type='checkbox' name='interests' value='hobby' /> Hobby
          Building
        </label>
        <br />
        <label>
          <input type='checkbox' name='interests' value='products' /> Making
          Profitable Products
        </label>
        <br />
        <label>
          <input type='checkbox' name='interests' value='networking' /> Project
          Networking
        </label>
        <br />
        <label>
          <input type='checkbox' name='interests' value='helping' /> Helping
          Others
        </label>
        <br />
        <label>
          <input type='checkbox' name='interests' value='unsure' /> Unsure
        </label>
        <br />
        <br />
        <label htmlFor='commitment-days'>
          Number of days a week you can commit to working on group projects:
        </label>
        <br />
        <input
          type='range'
          id='commitment-days'
          name='commitment-days'
          min='1'
          max='7'
          onChange={(e) => {
            const value = e.target.value
            document.getElementById('commitment-days-value').textContent = value
          }}
        />
        <br />
        <span id='commitment-days-value'>1</span> day(s)
      </fieldset>

      <fieldset>
        <legend>Terms and Conditions</legend>

        <label>
          <input type='checkbox' name='agreement' required />I agree to the{' '}
          <a href='https://youtu.be/HIcSWuKMwOw' target='_blank'>
            Terms and Conditions
          </a>
          .
        </label>
      </fieldset>

      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default Form
