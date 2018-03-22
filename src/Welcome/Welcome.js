import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import Login from '../Login/Login'
import Private from '../Private/Private'

class Welcome extends Component {
  constructor(props) {

    super(props);

    this.state = {
      isAuthenticated: false,
      loginError: false,
      redirect: false
     };
     this.signin = this.signin.bind(this);
     this.signout = this.signout.bind(this);
  }

  signout() {
    this.setState({isAuthenticated: false})
  }
  signin() {
    this.setState({isAuthenticated: true})
  }

  render() {

    const AuthButton = withRouter(
      ({ history }) =>
        this.state.isAuthenticated ? (
          <div>
            <p>You are Logged in!</p>
            <Private auth={this.state.isAuthenticated}/>
            <br/><br/>
            <button
              onClick={() => {
                this.signout(() => history.push("/"));
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <p><small>You are not logged in.</small></p>
            <Login
              auth={this.state.isAuthenticated}
              authToggle={this.signin}
            />
          </div>

        )
    );

    return (
      <div>

        <h2 id="welcomeText">Welcome!</h2>
        <hr/>
        <AuthButton />

        <br/>

      </div>

    );
  }
}
export default Welcome;
// import React, {Component} from 'react';
// import FacebookLogin from 'react-facebook-login';
// // import GoogleLogin from 'react-google-login';
// import {PostData} from '../services/PostData';
// import {Redirect} from 'react-router-dom';
// // import Home from '../Home/Home';
//
// class Welcome extends Component {
// constructor(props) {
//     super(props);
//        this.state = {
//        loginError: false,
//        redirect: false
// };
// this.signup = this.signup.bind(this);
// }
//
// signup(res, type) {
//      let postData;
//      if (type === 'facebook' && res.email) {
//
//        postData = {
//             method: type,
//             name: res.name,
//             provider: type,
//             email: res.email,
//             provider_id: res.id,
//             token: res.accessToken,
//             provider_pic: res.picture.data.url
//        };
//      }
//
//     // if (type === 'google' && res.w3.U3) {
//     //   postData = {
//     //     name: res.w3.ig,
//     //     provider: type,
//     //     email: res.w3.U3,
//     //     provider_id: res.El,
//     //     token: res.Zi.access_token,
//     //     provider_pic: res.w3.Paa
//     //   };
//     // }
//
// if (postData) {
// PostData('signup', postData).then((result) => {
//    let responseJson = result;
//    sessionStorage.setItem("userData", JSON.stringify(responseJson));
//    this.setState({redirect: true});
// });
// } else {}
// }
//
// render() {
//
// if (this.state.redirect || sessionStorage.getItem('userData')) {
//     return (<Redirect to={'/'}/>)
// }
//
// const responseFacebook = (response) => {
//     console.log("facebook console");
//     console.log(response);
//     this.signup(response, 'facebook');
// }
//
// // const responseGoogle = (response) => {
// //     console.log("google console");
// //     console.log(response);
// //     this.signup(response, 'google');
// // }
//
// return (
//
// <div>
// <h2 id="welcomeText">Welcome!</h2>
//
//
// <FacebookLogin
// appId="179178212706932"
// autoLoad={false}
// fields="name,email,picture"
// callback={responseFacebook}/>
// <br/><br/>
//
// {/* <GoogleLogin
// clientId="Your Google ID"
// buttonText="Login with Google"
// onSuccess={responseGoogle}
// onFailure={responseGoogle}/> */}
//
// </div>
//
// );
// }
// }
// export default Welcome;
