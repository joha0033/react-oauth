import React from 'react'
import {PostData} from '../services/PostData';
import Facebook from './Facebook/Facebook.js'
import { withRouter } from 'react-router-dom'
// import { Alert } from 'react-bootstrap'



class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newUser: true,
      fakeInput: {
        email: "testLocal@gmail.com",
        password: "test321"
      },
      input: {
            email: "",
            password: ""
        },
        blurred: {
            email: false,
            password: false
        }
      }
    this.signup = this.signup.bind(this)
  }


  signup(res, type) {

    let postData;

    if(type === 'signup' && res.email){
      postData = {
        method: type,
        email: res.email,
        password: res.password
      }
    }

    if (type === 'facebook' && res.email) {
      postData = {
          method: type,
          name: res.name,
          email: res.email,
          provider_id: res.id,
          access_token: res.accessToken
      };
    }

    if(type === 'local' && res.email){
      postData = {
        method: type,
        email: res.email,
        password: res.password
      }
    }

    if(type === 'FAKE' && res.email){

      postData = {
        method: 'FAKE',
        email: res.email,
        password: res.password
      }
    }

    if(type === 'FAKElocal' && res.email){

      postData = {
        method: 'FAKElocal',
        email: res.email,
        password: res.password
      }
    }

    if(type === 'FAKEfacebook' && res.email){

      postData = {
        _id: 5968,
        method: 'FAKEfacebook',
        email: res.email,
        password: res.password
      }
    }

    // console.log(' 89 postData', postData);

      if (postData) {

        PostData(postData.method, postData).then((result) => {

          console.log(' 94 result', result);

            localStorage.clear()
            localStorage.setItem("token", result.token);
            localStorage.setItem("userData", result.newUser);
            this.props.signinValid()
            this.props.hideModal()
            this.props.history.push("/profile");

        }).catch((error) =>{

          this.props.showAlertFromHeader(error.toString())


        });
    }
}

  handleInputChange(newPartialInput) {
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        ...newPartialInput
      }
    }))
  }

  handleBlur(fieldName) {
  this.setState(state => ({
      ...state,
      blurred: {
          ...state.blurred,
          [fieldName]: true
        }
    }))
  }

  validate() {
      const errors = {};
      const {input} = this.state;
      //control number of character also, regex
      if (!input.email) {
          errors.email = 'Email is required';
      }
      //control number of character also, regex
      if (!input.password) {
          errors.password = 'Password is required';
      }
      return {
          errors,
          isValid: Object.keys(errors).length === 0
      };
  }



  render() {

    const sendData = (data, type) => {
      // console.log('sendData, data, type', data, type);

      this.signup(data, type)

    }


    const {input, blurred} = this.state;
    const {errors, isValid} = this.validate();

    return (
      <div>
        <br/>
        <form

          onSubmit={
            (e) => {
              e.preventDefault()
              if(process.env.NODE_ENV !== 'development'){
                // console.log('not development, ');
                if(this.props.newUserFromHeader){
                  return sendData(this.state.input, 'signup')
                } else{
                  return sendData(this.state.input, 'local')
                }

              } else {

                if(this.props.newUserFromHeader){
                  return sendData(this.state.fakeInput, 'FAKE')
                } else{
                  return sendData(this.state.fakeInput, 'FAKElocal')
                }
              }
            }
          }>
                <label>
                  Email:
                  <input
                    // className={styles.right}
                    name="email"
                    type="text"
                    value={input.email}
                    onBlur={() => this.handleBlur('email')}
                    onChange={e => this.handleInputChange({email: e.target.value})}/>
                </label>

                <br/>
                <br/>

                <label>
                  Password:
                  <input
                    // className={styles.right}
                    name="password"
                    type="text"
                    value={input.password}
                    onBlur={() => this.handleBlur('password')}
                    onChange={e => this.handleInputChange({password: e.target.value})}/>
                </label>

                <br/>
                <br/>

                  <input
                    touchend="submit"
                    type="submit"
                    value="Submit"
                    disabled={process.env.NODE_ENV !== 'development' ? !isValid : null}/>

                  <br/>
                  <br/>





              <br/>
              {blurred.email && !!errors.email && <span>{errors.email}</span>}
              <br/>
              {blurred.password && !!errors.password && <span>{errors.password}</span>}

            </form>
            {
              this.props.newUserFromHeader ?
              <a><small onClick={()=>this.props.newUserToggleFromHeader(false)}>Already signed up?</small></a>
              :
              <a><small onClick={()=>this.props.newUserToggleFromHeader(true)}>Need an Account?</small></a>

            }
          <br/>
          <Facebook signinFB = {sendData}/>
      </div>
    );
  }
}

export default withRouter(Signup)
