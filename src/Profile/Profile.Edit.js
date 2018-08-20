import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formActions } from "../containers/Forms/Form.actions"
import { InputContainer } from "../containers/Forms/Inputs/Input.container"
import SubmitComponent from "../containers/Forms/Buttons/SubmitButton.component"
import { profileActions } from "./Profile.actions";
import { Col, Row  } from 'react-bootstrap'

class EditProfile extends React.Component {
  
    sendDataToStore(e) {
        e.preventDefault()
        console.log('e.target', e.target);
        console.log('sendDataBlah - ', this.props.form);
        let {password, ...profileEdit} = {...this.props.form.formState.input};
        password = ''
        console.log(profileEdit);
        
        const token = this.props.credentials.token
        console.log('TOKEN____',token);
        this.props.change(profileEdit, token)
        this.props.clearForm()
      }

    render() {
        const editProfileForm = Object.values(this.props.form.formProps).map((inputProps, index) => {
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

        const profilePictureHandler = (image) => {
          console.log('images', image.target.files[0]);
          const file = image.target.files[0]
          return this.props.handleProfilePicture(file)
        }

        const bannerPictureHandler = (image) => {
          console.log('images', image.target.files[0]);
          const file = image.target.files[0]
          return this.props.handleBannerPicture(file)
        }
        // const BannerPictureHandler = (images) => {
        //   console.log('images', images.target.files[0]);
        //   this.props.
        // }

        const ImagesUpload = (
            <div>
              <label>{'Profile Image'}</label>
              <input
                name='profileImage' 
                type={'file'} 
                onChange={profilePictureHandler}
              />
              <br/>
              <label>{'Banner Image'}</label>
              <input 
                name='bannerImage'
                type={'file'} 
                onChange={bannerPictureHandler}
              />
            </div>)
        
        

        const submitButton = (<SubmitComponent text='Submit Changes'/>)
        const backButton = (<Link to={`/profile/${this.props.profile.details.username}`}> Back </Link>)

        
        
        return (
          <div >
            <div >
              <style type='text/css'>
                {`.padding {
                    padding: 1.5em;
                  }
                  .padding-bottom{
                    margin-bottom: 1em;
                }`}
              </style>
            </div>
            <div className='padding padding-bottom'>
            <h2>EDIT PROFILE DETAILS</h2>
            <br/>
              <form
                onSubmit={(e) => this.sendDataToStore(e)}>
                <Row>
                <Col xs={4}>
                  
                  </Col>
                  <Col xs={4}>
                    {editProfileForm}
                    {ImagesUpload}
                  </Col>
                  <Col xs={4}>
                  
                  </Col>
                </Row>
                 
                
                
                
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
    },
    handleProfilePicture: (image) => {
      dispatch(formActions.handleProfilePicture(image))
    },
    handleBannerPicture: (image) => {
      dispatch(formActions.handleBannerPicture(image))
    }
  }
}

export default   connect(mapStateToProps, mapDispatchToProps)(EditProfile)