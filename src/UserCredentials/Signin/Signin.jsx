import React from 'react';
import Facebook from '../Facebook/Facebook'
import { connect } from 'react-redux'
import { userActions } from "./userActions"

// import { withRouter } from 'react-router-dom'


class Signup extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      //  DEV ENV CHANGES INPUT TO FAKE DATA
      input: {
            email: "",
            password: ""
      },
      // HANDLES INPUT VALIDATION AFTER INPUT LOSES FOCUS
      blurred: {
          email: false,
          password: false
      },
      // HANDLES SUBMIT EVENT
      submitted: false
    }

      this.developmentData = this.developmentData.bind(this)
      this.facebookLogin = this.facebookLogin.bind(this)

  }

  componentDidMount(){

    return process.env.NODE_ENV === 'development' ? this.developmentData() : null

  }

  facebookLogin(res) {
    return res ? (this.props.hideModal(), this.props.signinValid()) : console.log(res);
    
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
        }, 

    }))
  }

  ///////////////
  // SIGNUP FLOW
  postForToken() {
    const { email, password } = this.state.input
    this.props.login(email, password)
    this.props.hideModal() // TRIGGERS HIDE MODAL FROM HEADER
    // this.props.history.push("/profile"); // GO TO PROFILE, WILL REROUTE IF NOT VALID

  }


  // ////////////////////////////
  // FORM INPUT DATA HANDLING //
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
              // START OF FORM
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
              <a><small onClick={()=>this.props.newUserToggleFromHeader(true)}>New user? <br/>Register here!</small></a>

            }
          <br/>
          <Facebook hideModal = {this.props.hideModal}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {  user } = state;
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (email, password) => {
      dispatch(userActions.login(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
