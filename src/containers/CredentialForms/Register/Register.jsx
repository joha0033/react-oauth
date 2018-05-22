import React from "react";
import { connect } from 'react-redux'
import { registerActions } from "./registerActions"
import { formActions } from "../Forms/Form.actions"
import Facebook from "../Facebook/Facebook";
import { InputContainer } from "../Forms/Inputs/Input.container"
import SubmitComponent from "../Forms/Buttons/SubmitButton.component"
import ValidationComponent from "../Forms/Validation/Validation.componetn";

class Register extends React.Component {

  ///////////////
  // SIGNUP FLOW
  sendDataToStore(e) {
    e.preventDefault()
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

      
        
        let form = Object.values(this.props.form.formProps).map((value, index) => {
          console.log(this.props.form.formState.input[value.name]);
          
          return (
            <div key={index} >
              <InputContainer
                label={value.label}
                name={value.name}
                type={value.type}
                value={this.props.form.formState.input[value.name]}
                onBlur={() => this.props.handleBlur(value.name)}
                onChange={e => this.props.handleChange(value.name, e.target.value)}
                />
              <br/>
            </div>
            
          )
        })
        
        return (
    
          <div>
            <br/>
            <form
            onSubmit={(e) => this.sendDataToStore(e)}>
              {form}

                      <SubmitComponent/>
                      {/* <ValidationComponent 
                      validationType={"email"}
                      blurred={"email"}
                      errors={"email"}
                      /> */}
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
    },
    handleChange: (variableName, targetValue) => {
      dispatch(formActions.handleInputChange(variableName, targetValue))
    },
    handleBlur: (fieldName, props) => {
        dispatch(formActions.handleBlur(fieldName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)