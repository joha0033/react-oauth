export const URL = (URLtype) => {
  // console.log('URLtype', URLtype);
  switch(URLtype) {
    case 'signup':
      URLtype = 'https://murmuring-everglades-26713.herokuapp.com/users/signup';
      break;
    case 'facebook':
      URLtype = 'https://murmuring-everglades-26713.herokuapp.com/users/oauth/facebook';
      break;
    case 'local':
      URLtype = 'https://murmuring-everglades-26713.herokuapp.com/users/signin';
      break;
    case 'FAKE':
      URLtype = 'http://localhost:5000/users/signup';
      break;
    case 'FAKElocal':
      URLtype = 'http://localhost:5000/users/signin'
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
