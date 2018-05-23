import React from "react";
import { connect } from 'react-redux'
import { registerActions } from "./registerActions"
import { formActions } from "../Forms/Form.actions"
import Facebook from "../Facebook/Facebook";
import { InputContainer } from "../Forms/Inputs/Input.container"
import SubmitComponent from "../Forms/Buttons/SubmitButton.component"
import ValidationContainer from "../Forms/Validation/Validation.container";

class Register extends React.Component {

  ///////////////
  // SIGNUP FLOW
  sendDataToStore(e) {
    e.preventDefault()
    const registerData = this.props.form.formState.input;
    this.props.register(registerData)
  }

    render() {

      
        
        let registerForm = Object.values(this.props.form.formProps).map((value, index) => (
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
        )

        let validationMessage = Object.keys(this.props.form.formState.blurred).map((value, index) => (
          <div key={index}>
          {console.log(value)}
            <ValidationContainer 
              type={value}
              blurred={value}
              error={this.props.form.formState.blurred[value].error}
              message={this.props.form.formState.blurred[value].message}
              />
          </div>
        ))

        const submitButton = (<SubmitComponent/>)
        
        return (
    
          <div>            
            <form
              onSubmit={(e) => this.sendDataToStore(e)}>
              {registerForm}
              {validationMessage}
              {submitButton}
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