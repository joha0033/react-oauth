import React from "react";
import { connect } from 'react-redux'
import { registerActions } from "./registerActions"
import { formActions } from "../Forms/FormActions"
import Facebook from "../Facebook/Facebook";
// import { handleBlur } from "../Forms/RegisterForm"
import {RegisterFormI} from "../Forms/RegisterForm"


class Register extends React.Component {

  ///////////////
  // SIGNUP FLOW
  sendDataToStore() {
    const registerData = this.props.form.formState.input;
    this.props.register(registerData)
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

    // VALIDATION
    validate() {
        const errors = {};
        const input = {};

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

  
        const blurred = ""
    
        const { errors, isValid } = this.validate();
        console.log(this.props.form.formProps);
        
        let form = Object.values(this.props.form.formProps).map((value, index) => {
          return (
            <div key={index} >
              <RegisterFormI
                label={value.label}
                name={value.name}
                type={value.type}
                value={value.value}
                />
              <br/>
            </div>
            
          )
        })
        
        return (
    
          <div>
            <br/>
            <form
            onSubmit={
              (e) => {
                e.preventDefault()
                return this.sendDataToStore()
                }
              }>
              {form}
                  
    
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
  const {  user, form } = state;
  return {
    user,
    form
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    registerFormData: (newUser) => {
      dispatch(formActions.registerFormData(newUser))
    },
    register: (firstName, lastName, email, password) => {
      dispatch(registerActions.register(firstName, lastName, email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)