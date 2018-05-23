import React from "react";
import { connect } from 'react-redux'
import { credentialActions } from "../Credentials.actions"
import { formActions } from "../Forms/Form.actions"
import Facebook from "../Facebook/Facebook";
import { InputContainer } from "../Forms/Inputs/Input.container"
import SubmitComponent from "../Forms/Buttons/SubmitButton.component"
import { modalActions } from "../../Modals/Modal.actions"

class Register extends React.Component {

  sendDataToStore(e) {
    e.preventDefault()
    const registerData = this.props.form.formState.input;
    this.props.register(registerData)
    this.props.clearForm()
  }

    render() {

        const errorMessage = (inputProps) => {
          let isError, errorMessage;
          if(!!inputProps.required){
            isError = this.props.form.formState.blurred[inputProps.name].error
            errorMessage = this.props.form.formState.blurred[inputProps.name].message
          }
          return isError ?
            errorMessage :
            null
        }
        
        let registerForm = Object.values(this.props.form.formProps).map((inputProps, index) => (
            <div key={index} >
              <InputContainer
                label={inputProps.label}
                errMsg={errorMessage(inputProps)}
                name={inputProps.name}
                type={inputProps.type}
                value={this.props.form.formState.input[inputProps.name]}
                onBlur={() => this.props.handleBlur(inputProps.name)}
                onChange={e => this.props.handleChange(inputProps.name, e.target.value)}
              />
              <br/>
            </div> 
            )
        )
        

        const submitButton = (<SubmitComponent/>)
        
        return (
    
          <div>            
            <form
              onSubmit={(e) => this.sendDataToStore(e)}>
              {registerForm}
              {submitButton}
              <a onClick={() =>{
                this.props.hideRegisterModal()
                this.props.showSigninModal()
              }}>Signin</a>
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
  return {
    register: (firstName, lastName, email, password) => {
      dispatch(credentialActions.register(firstName, lastName, email, password))
    },
    handleChange: (variableName, targetValue) => {
      dispatch(formActions.handleInputChange(variableName, targetValue))
    },
    handleBlur: (fieldName, props) => {
      dispatch(formActions.handleBlur(fieldName))
    },
    clearForm: () => {
      dispatch(formActions.clearForm())
    },
    hideRegisterModal: () => {
      dispatch(modalActions.hideRegisterModal())
    },
    showSigninModal: () => {
      dispatch(modalActions.showSigninModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)