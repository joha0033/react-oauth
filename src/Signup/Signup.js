import React from 'react'
import {PostData} from '../services/PostData';
import Facebook from './Facebook/Facebook.js'


class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fakeInput: {
        method: 'local',
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
      console.log('hit type local');
      postData = {
        method: type,
        email: res.email,
        password: res.password
      }
    }

    if(type === 'FAKElocal' && res.email){
      console.log('hit type fake local');
      postData = {
        method: type,
        email: res.email,
        password: res.password
      }
    }

    if(type === 'FAKEfacebook' && res.email){
      console.log('hit type fake fb');
      postData = {
        _id: 5968,
        method: type,
        email: res.email,
        password: res.password
      }
    }

    console.log(postData);
      if (postData) {
        PostData(postData.method, postData).then((result) => {
          console.log(result);
          if(result.error){

            alert('email already exists. Try signing in, or sign up witha different email address.')

          }else{
            sessionStorage.clear()
            sessionStorage.setItem("token", result.token);
            console.log('seesion storage!', sessionStorage.getItem('token'));
            this.props.signinValid()
          }
        }).catch(alert);
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
      this.props.hideModal()
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
                return sendData(this.state.input, 'local')
              } else {
                return sendData(this.state.fakeInput, 'FAKElocal')
              }
            }
          }>

              <h2> Sign up </h2>

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


                <p><small>already have an account?</small></p>
                <p><small>click here</small></p>
              <br/>
              {blurred.email && !!errors.email && <span>{errors.email}</span>}
              <br/>
              {blurred.password && !!errors.password && <span>{errors.password}</span>}

            </form>

            <Facebook signinFB = {sendData}/>

        <br/>
      </div>
    );
  }
}

export default Signup
