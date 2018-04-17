import React from 'react'
import {PostData} from '../../services/PostData';
import Facebook from '../Facebook/Facebook.js'
import { withRouter } from 'react-router-dom'



class Signup extends React.Component {
  constructor(props){

    super(props)

    this.state = {

      //  DEV ENV CHANGES INPUT TO FAKE DATA
      input: {
            email: "",
            password: ""
        },
        // HANDLES INPUT CHANGES
        blurred: {
            email: false,
            password: false
        }

      }

      this.setToken = this.setToken.bind(this)
      this.dataToPost = this.dataToPost.bind(this)
      this.developmentData = this.developmentData.bind(this)
      this.callPostFetch = this.callPostFetch.bind(this)
      this.postForToken = this.postForToken.bind(this)

  }

  componentWillMount(){

    return process.env.NODE_ENV === 'development'?this.developmentData():null

  }

  // /////////////////
  // DEVELOPMENT DATA
  developmentData() {

    // DEVELOPMENT ENV FOUND, SET MOCK STATE
    return this.setState(prevState => ({
      ...prevState,
        input: {
          ...prevState.input,
            email: "testLocal@gmail.com",
            password: "test321"
        }
    }))

  }

  ///////////////
  // SIGNUP FLOW
  postForToken(res) {


    let postData = this.dataToPost(res)

      return !postData
        ? console.log('missing some credential in the form... email or password') // ERROR MESSAGE
        : this.callPostFetch(postData)

  }

  // DATA TO POST
  dataToPost(data){

    let { email, password } = data

    let credentials = {
        email,
        password
      }

    return !!email && !!password
      ? credentials
      : false

  }

  //POST DATA
  callPostFetch(data) {

    let isNewUser = this.props.newUserFromHeader

    return (

      PostData(isNewUser, data).then((result) => {
        console.log(result);
        this.setToken(result)

      }).catch((error) => {

        this.props.showAlertFromHeader(error.toString())

      })
    )
  }

  // JWOT SETTING
  setToken(data) {
    console.log(data);
    //CONSOLIDATE THESE FUNCTIONS??
    // CHECK EXISTENCE OF TOKEN AND NEWUSER
    sessionStorage.clear()
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("email", data.userData.email);
    this.props.signinValid() //PROP PASSED FROM APP TO HEADER TO HERE
    this.props.hideModal() // TRIGGERS HIDE MODAL FROM HEADER
    this.props.history.push("/profile"); // GO TO PROFILE, WILL REROUTE IF NOT VALID

  }





  // ////////////////////////////
  // FORM INPUT DATA HANDLING
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

  ///////////////
  // VALIDATION
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

    const { input, blurred } = this.state;

    const { errors, isValid } = this.validate();

    return (

      <div>
        <br/>
        <form

          // DATA SUBMIT
          onSubmit={
            (e) => {

              // PREVENT DEFUALT
              e.preventDefault()

              return this.postForToken(this.state.input)

              }
              // END OF FORM
            }>
                {/*  EMAIL INPUT*/}
                <label>

                  Email:

                  <input
                    name="email"
                    type="text"
                    value={input.email}
                    onBlur={() => this.handleBlur('email')}
                    onChange={e => this.handleInputChange({email: e.target.value})}
                  />

                </label>

                <br/>
                <br/>

                {/*  PASSWORD INPUT */}
                <label>

                  Password:

                  <input
                    name="password"
                    type="text"
                    value={input.password}
                    onBlur={() => this.handleBlur('password')}
                    onChange={e => this.handleInputChange({password: e.target.value})}
                  />

                </label>

                <br/>
                <br/>

                  <input
                    touchend="submit"
                    type="submit"
                    value="Submit"
                    disabled={process.env.NODE_ENV !== 'development' ? !isValid : null}
                  />

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
          <Facebook signinFB = {this.signup}/>
      </div>
    );
  }
}

export default withRouter(Signup)
