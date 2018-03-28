export const URL = (URLtype) => {

  //
  switch(URLtype) {
    case 'facebook':
      URLtype = 'https://murmuring-everglades-26713.herokuapp.com/users/oauth/facebook';
      break;
    case 'local':
      URLtype = 'https://murmuring-everglades-26713.herokuapp.com/users/signup';
      break;
    case 'FAKElocal':
      URLtype = 'http://localhost:5000/users/signup'
      break;
    case 'FAKEfacebook':
      URLtype = ' http://localhost:5000/users/oauth/facebook'
      break;
    default:
      console.log('not sure of your route type/method. Not recognized.')
      break;
  }
  return URLtype
}
