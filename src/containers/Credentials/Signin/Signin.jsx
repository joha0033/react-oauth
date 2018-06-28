import React from 'react';
import Facebook from '../Facebook/Facebook'
import { connect } from 'react-redux'
import { credentialActions } from "../Credentials.actions"
import { formActions } from "../Forms/Form.actions"
import { InputContainer } from "../Forms/Inputs/Input.container"
import SubmitComponent from "../Forms/Buttons/SubmitButton.component"
import { modalActions } from "../../Modals/Modal.actions"

class Signin extends React.Component {

  ///////////////
  // SIGNUP FLOW
  sendDataToStore(e) {
    e.preventDefault()
    const signinData = this.props.form.formState.input;
    this.props.login(signinData.email, signinData.password)
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
    
    let signinForm = Object.values(this.props.form.formProps).map((inputProps, index) => {
      return inputProps.required ?
      (
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
        ) : null
      }
    )
    

    const submitButton = (<SubmitComponent/>)

    return (

      <div>
          <form
              onSubmit={(e) => this.sendDataToStore(e)}>
              {signinForm}
              {submitButton}
              <a onClick={() => {
                this.props.hideSigninModal()
                this.props.showRegisterModal()
              }}>Register</a>
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
    login: (email, password) => {
      dispatch(credentialActions.login(email, password))
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
    hideSigninModal: () => {
      dispatch(modalActions.hideSigninModal())
    },
    showRegisterModal: () => {
      dispatch(modalActions.showRegisterModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
