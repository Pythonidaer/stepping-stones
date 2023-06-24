import bcrypt from 'bcryptjs'

// An array of user objects representing sample user data
const users = [
  {
    personalInformation: {
      fullName: 'Jonathan Hammond',
      email: 'codefolio.work@gmail.com',
      password: bcrypt.hashSync('test123', 10),
      bio: 'test',
      image: {},
    },
    educationAndSkills: {
      bootcampMajor: 'webdev',
      bootcampLocation: 'test',
      graduationDate: 'test',
      yearsExperience: '1-3',
      skills: 'test',
    },
    interestsAndAvailability: {
      interests: ['learning', 'seeking', 'hobby'],
      commitmentDays: '6',
    },
  },
]

export default users
/*
The password property is hashed using bcryptjs.hashSync() to securely store the passwords. The second argument 10 represents the salt rounds used for hashing.
*/
// isAdmin: true,
