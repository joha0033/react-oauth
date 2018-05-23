import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login';
import { facebookActions } from "./facebookActions"
import { connect } from 'react-redux'

class Facebook extends Component {
  
  render() {

    const responseFacebook = (response) => {
      // SEND FAKE FB DATA ON DEV ENV
      // console.log(response);
      
      return process.env.NODE_ENV === 'development'
        // IF
        ?   (
          // OVERWRITE FB RESPONSE WITH FAKE DATA
          response = { // (DOUBLE CHECK REQUIRED DATA)
              name: "Austin Johnston",
              email: "testFacebook@gmail.com",
              password: 'test321',
              provider_id: process.env.REACT_APP_PROVIDER_ID
            },
          this.props.facebookAuthenticate(response)
          

          // SEND IT
        )
        // ELSE
        : this.props.facebookAuthenticate(response)
          
      }

    return (

      <div>

        {
        // SEPARATE BUTTON FOR DEV ENV
        process.env.NODE_ENV === 'development'
          //  DEV
          ? <button onClick={responseFacebook} >fb... fake</button>
          // PROD
          : 
          <FacebookLogin
              appId={process.env.REACT_APP_APP_ID}
              autoLoad={false}
              reauthenticate={true}
              fields="name,email,picture"
              callback={responseFacebook}/>
        }
      </div>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    facebookAuthenticate: (firstName, lastName, email, password) => {
      dispatch(facebookActions.facebookAuthenticate(firstName, lastName, email, password))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Facebook)

export default connect(null, mapDispatchToProps)(Facebook)
