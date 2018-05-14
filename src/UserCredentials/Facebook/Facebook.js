import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  
  render() {

    const responseFacebook = (response) => {
      // SEND FAKE FB DATA ON DEV ENV
      
      
      return process.env.NODE_ENV === 'development'
        // IF
        ?   (
          // OVERWRITE FB RESPONSE WITH FAKE DATA
          response = { // (DOUBLE CHECK REQUIRED DATA)
              name: "Austin Johnston",
              email: "testFacebook@gmail.com",
              password: 'test321',
              provider_id: "10102721646989662"
            },
         console.log('response from FB', response),
          // SEND IT
         this.props.fbClick(response)

            )
        // ELSE
        : this.props.fbClick(response)
      }





    return (

      <div>

        {

        // SEPARATE BUTTON FOR DEV ENV
        process.env.NODE_ENV === 'development'
          //  DEV
          ? <button onClick={responseFacebook} >fb... fake</button>
          // PROD
          : <FacebookLogin
              appId="179178212706932"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}/>

        }

      </div>

    )
  }
}



export default Facebook
