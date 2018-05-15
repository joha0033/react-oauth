import React from "react";
import { connect } from 'react-redux'
import { registerActions } from "./registerActions"
import Facebook from "../Facebook/Facebook";



class Register extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			//  DEV ENV CHANGES INPUT TO FAKE DATA
			input: {
        firstName:"",
        lastName: "",
				email: "",
				password: ""
			},
			// HANDLES INPUT CHANGES
			blurred: {
				firstName:"",
        lastName: "",
				email: "",
				password: ""
			},
			// HANDLES SUBMIT EVENT
			submitted: false
        };
        
    this.handleBlur = this.handleBlur.bind(this)
    this.handleInputChange= this.handleInputChange.bind(this)
		this.developmentData = this.developmentData.bind(this);

  }

  componentDidMount(){
    return process.env.NODE_ENV === 'development' ? 
      this.developmentData() : 
      null
  }

  ///////////////
  // SIGNUP FLOW
  postForToken() {
    const { firstName, lastName, email, password } = this.state.input
    this.props.register(firstName, lastName, email, password)
    this.props.hideModal() // TRIGGERS HIDE MODAL FROM HEADER
  }
  
    // /////////////////
    // DEVELOPMENT DATA
    developmentData() {

      // DEVELOPMENT ENV FOUND, SET MOCK STATE
      return this.setState(prevState => ({
        ...prevState,
          input: {
            ...prevState.input,
              firstName: 'Taylor',
              lastName: 'Swift',
              email: "testLocal@gmail.com",
              password: "test321"
          }, 

      }))
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // HANDLE FORM DATA INPUTS AND CHANGES

    // BLURRRRR CHANGES
    handleBlur(fieldName) {
        this.setState(state => ({
            ...state,
            blurred: {
                ...state.blurred,
                [fieldName]: true
            }
        }))
        
    }

    // INPUT CHANGEES
    handleInputChange(newPartialInput) {
        this.setState(state => ({
          ...state,
          input: {
            ...state.input,
            ...newPartialInput
          }
        }))
        
    }

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
    // END OF HANDLE FORM DATA
    ////////////////////////////////////////////////////////////////////////////////////
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

                    {/*  FIRST NAME INPUT*/}
                    <label>
        
                    First name:

                    <input
                      name="firstName"
                      type="text"
                      value={input.firstName}
                      onBlur={() => this.handleBlur('firstName')}
                      onChange={e => this.handleInputChange({firstName: e.target.value})}
                    />

                    </label>
                    <br/>
                    {/*  LAST NAME INPUT*/}
                    <label>

                    Last name:

                    <input
                      name="lastName"
                      type="text"
                      value={input.lastName}
                      onBlur={() => this.handleBlur('lastName')}
                      onChange={e => this.handleInputChange({lastName: e.target.value})}
                    />

                    </label>
                    <br/>
                    {/*  EMAIL INPUT*/}
                    <label>
    
                      *Email: 
    
                      <input

                        name="email"
                        type="text"
                        value={input.email}
                        onBlur={() => this.handleBlur('email')}
                        onChange={e => this.handleInputChange({email: e.target.value})}
                      />
    
                    </label>
    
                    <br/>
    
                    {/*  PASSWORD INPUT */}
                    <label>
    
                      *Password:
    
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
                      <p>* Required</p>

                      <a><small onClick={()=>this.props.newUserToggleFromHeader(false)}>Already signed up? <br/> Signin here!</small></a>
    
                  <br/>
                  {blurred.email && !!errors.email && <span>{errors.email}</span>}
                  <br/>
                  {blurred.password && !!errors.password && <span>{errors.password}</span>}
    
                </form>
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
    register: (firstName, lastName, email, password) => {
      dispatch(registerActions.register(firstName, lastName, email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)