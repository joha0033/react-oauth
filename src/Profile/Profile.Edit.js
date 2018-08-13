import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formActions } from "../containers/Forms/Form.actions"
import { InputContainer } from "../containers/Forms/Inputs/Input.container"
import SubmitComponent from "../containers/Forms/Buttons/SubmitButton.component"
import { profileActions } from "./Profile.actions";

class EditProfile extends React.Component {

    sendDataToStore(e) {
        e.preventDefault()
        console.log('sendDataBlah - ', this.props.form);
        const profileEdit = this.props.form.formState.input;
        const token = this.props.credentials.token
        console.log('TOKEN____',token);
        
        this.props.change(profileEdit, token)
        this.props.clearForm()
      }

    render() {
        let editProfileForm = Object.values(this.props.form.formProps).map((inputProps, index) => {
          if(inputProps.name !== 'password' && inputProps.name !== 'email') {
            return (<div key={index} >
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
            </div>) 
          }else{
            return null
          }
          
        })
        

        const submitButton = (<SubmitComponent text='Submit Changes'/>)
        const backButton = (<Link to={`/profile/${this.props.profile.details.username}`}> Back </Link>)

        
        return (
          <div >
            <div >
              <style type='text/css'>
                {`.padding {
                    padding: 2em;
                  }
                  .padding-bottom{
                    margin-bottom: 2.1em;
                }`}
              </style>
            </div>
            <div className='padding padding-bottom'>
            <h2>EDIT PROFILE DETAILS</h2>
            <br/>
              <form
                onSubmit={(e) => this.sendDataToStore(e)}>
                {editProfileForm}
                {submitButton}
                <div className='padding'>
                {backButton}
                </div>
                
              </form>
            </div>
          </div>
        );
      }
    }
    
const mapStateToProps = (state) => {
  const {  user, form, profile, credentials } = state;
  return {
    user,
    form,
    profile,
    credentials
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
    }
  }
}

export default   connect(mapStateToProps, mapDispatchToProps)(EditProfile)