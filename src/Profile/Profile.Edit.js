import React from "react";
import { connect } from 'react-redux'
import { formActions } from "../containers/Credentials/Forms/Form.actions"
import { InputContainer } from "../containers/Credentials/Forms/Inputs/Input.container"
import SubmitComponent from "../containers/Credentials/Forms/Buttons/SubmitButton.component"
import { profileActions } from "./Profile.actions";

class EditProfile extends React.Component {

    sendDataToStore(e) {
        e.preventDefault()
        console.log('sendDataBlah - ',e.target, this.props.form.formState.input);
        const profileEdit = this.props.form.formState.input;
        this.props.change(profileEdit)
        this.props.clearForm()
      }

    render() {
        let editProfileForm = Object.values(this.props.form.formProps).map((inputProps, index) => (
            <div key={index} >
              <InputContainer
                label={inputProps.label}
                name={inputProps.name}
                errMsg=''
                type={inputProps.type}
                value={this.props.form.formState.input[inputProps.name]}
                onBlur={() => this.props.handleBlur(inputProps.name)}
                onChange={e => this.props.handleChange(inputProps.name, e.target.value)}
              />
              <br/>
            </div> 
            )
        )
        

        const submitButton = (<SubmitComponent />)
        
        return (
    
          <div>            
            <form
              onSubmit={(e) => this.sendDataToStore(e)}>
              {editProfileForm}
              {submitButton}
            </form>
          </div>
        );
      }
    }
    
const mapStateToProps = (state) => {
  const {  user, form, profile } = state;
  return {
    user,
    form,
    profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (field, edit) => {
      dispatch(profileActions.changeData(field, edit))
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
    // hideRegisterModal: () => {
    // dispatch(modalActions.hideRegisterModal())
    // },
    // showSigninModal: () => {
    // dispatch(modalActions.showSigninModal())
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)