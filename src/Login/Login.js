

import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

import {PostData} from '../services/PostData';
// import {postDataTest} from '../services/PostData';
// import {GetData} from '../services/GetData';

class Login extends Component {

  constructor(props){
      super(props);
      this.state = {
        faekSignupData: {
          email: 'joha0033@gmail.com',
          password: 'test321'
        },
        fakeFBData: {
        name: "Austin Johnston",
        email: "joha0033@gmail.com",
        passwords: 'test321',
        provider_id: "10102721646989662",
        }
     };
  }

  signup(res, type) {
    // FB and G+ logic below exports
    // postdata object, parse response
    let postData;
    if(type === 'local' && res.email){
      postData = {
        email: res.email,
        password: res.password
      }
    }

      if (postData) {
        console.log('ln 40 || in postData in Login.js hit, postData', postData);
        PostData('signup', postData).then((result) => {
           let responseJson = result;
           sessionStorage.setItem("userData", JSON.stringify(responseJson));
         });

      }
  }

  render() {
    //FAKING FB DATA FOR NOW>
    const responseFacebook = (response) => {
        // console.log('response from Facebook: ', this.state.fakeFBData);
        this.props.singin()
        this.signup(this.state.fakeFBData, 'facebook');
        // return (<Redirect to={'/home'}/>)
    }

    const sendData = () => {
      console.log('sendData');
      this.signup(this.state.faekSignupData, 'local')
    }

    // const sendDataTest = () => {
    //   console.log('sendData', this.state.faekSignupData);
    //   postDataTest(this.state.faekSignupData)
    //     .then(data => console.log(data)) // JSON from `response.json()` call
    //     .catch(error => console.error(error))
    // }
    //
    // const getData = () => {
    //   console.log('getData');
    //   GetData('test').then((result) => {
    //
    //     console.log('get result', result);
    //
    //    });
    // }

    return (
      <div >
        {/* <br/><br/> */}
        <FacebookLogin
        appId="179178212706932"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}/>
        {/* <GoogleLogin
        clientId="Your Google ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}/> */}
        <br/><br/>
        <button onClick={sendData}>
          Sign Up
        </button>
        {/* <button onClick={sendDataTest}>
          local data sendTest
        </button>
        <button onClick={getData}>
          local data get
        </button> */}

      </div>
    );

  }
}


export default Login;

 // FacebookLogin
// {
// name: "Austin Johnston",
// email: "joha0033@gmail.com",
// accessToken: "EAACi9i24SnQBAOnhl9wZCPyiiZBTbYnfll0MKhjAje5lTSfOT…ExfXJMhagKkyZADYCtaWK6iM1dX3yvGvZAS9UCLKG8WMgZDZD"
// }
// if (type === 'facebook' && res.email) {
//   console.log('ln 28 || if email and FB hit: ', res.email);
//   postData = {
//       method: type,
//       name: res.name,
//       email: res.email,
//       provider_id: res.id,
//       // token: res.accessToken
//   };
// }

// if (type === 'google' && res.w3.U3) {
//   postData = {
//     name: res.w3.ig,
//     provider: type,
//     email: res.w3.U3,
//     provider_id: res.El,
//     token: res.Zi.access_token,
//     provider_pic: res.w3.Paa
//   };
// }
