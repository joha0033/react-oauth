import React from 'react';
import Facebook from '../Facebook/Facebook'
import { connect } from 'react-redux'
import { credentialActions } from "../Credentials.actions"
import { formActions } from "../../Forms/Form.actions"
import { profileActions } from "../../../Profile/Profile.actions"
import { InputContainer } from "../../Forms/Inputs/Input.container"
import SubmitComponent from "../../Forms/Buttons/SubmitButton.component"
import { modalActions } from "../../Modals/Modal.actions"
import ValidationComponent from '../../Forms/Validation/Validation.container';
// import { Link } from 'react-router-dom'

class Signin extends React.Component {
    componentDidMount() {
        // console.log('CredentialsForm - ',this.props.form);
        
    }
  ///////////////
  // SIGNUP FLOW
  sendDataToStore(e) {
    console.log(e);
    
    e.preventDefault()
    const { email, password } = this.props.form.formState.input;
    this.props.fetchingProfile()
    this.props.login(email, password)
    // this.props.clearForm()
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

    
    
    let CredentialsForm = Object.values(this.props.form.formProps).map((inputProps, index) => {
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
    

    const submitButton = (<SubmitComponent text={'Submit'}/>)

    return (

      <div>
          <form
              onSubmit={(e) => this.sendDataToStore(e)}>
              <ValidationComponent message={'Invalid Credentials'}/>
              {CredentialsForm()}
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
    },
    fetchingProfile: () => {
      dispatch(profileActions.fetchingProfile())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
