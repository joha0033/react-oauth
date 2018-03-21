import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Redirect} from 'react-router-dom';

import {PostData} from '../services/PostData';

class Login extends Component {

  constructor(props){
      super(props);
      this.state = {

     };
  }

  signup(res, type) {

  let postData;

  if (type === 'facebook' && res.email) {
    postData = {
        method: type,
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
    };
  }

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

    if (postData) {

      PostData('signup', postData).then((result) => {
         let responseJson = result;
         sessionStorage.setItem("userData", JSON.stringify(responseJson));
         this.setState({redirect: true});
       });

    } else {

    // what?

  }
}

  render() {

    const responseFacebook = (response) => {
        this.props.authToggle()
        this.signup(response, 'facebook');
        return (<Redirect to={'/Home'}/>)
    }

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

      </div>
    );

  }
}


export default Login;
