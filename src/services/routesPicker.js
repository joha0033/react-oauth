
export const URL = (isNewUser) => {

  let BaseURL

  // URL BASED ON PROCESS>ENV
  !process.env.NODE_ENV

  ?  (isNewUser //URL BASE ON ISNEWUSER
      ? BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/signup'
      : BaseURL = 'https://murmuring-everglades-26713.herokuapp.com/users/signin')

  :  (isNewUser
      ? BaseURL = 'http://localhost:5000/users/signup'
      : BaseURL = 'http://localhost:5000/users/signin')

      return BaseURL

}
