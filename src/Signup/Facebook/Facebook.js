import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  // constructor(props){
  //     super(props);
  //
  //    };


  render() {

    const responseFacebook = (response) => {
      console.log('process: ', process.env.NODE_ENV);
      if(process.env.NODE_ENV === 'development'){
        response = {
        method: 'FAKEfacebook',
        name: "Austin Johnston",
        email: "testFacebook@gmail.com",
        password: 'test321',
        provider_id: "10102721646989662"
        }

        this.props.signinFB(response, 'FAKEfacebook')
      } else {

        this.props.signinFB(response, 'facebook')
      }


    }


    return (
      <div>
        {process.env.NODE_ENV === 'development' ?
        <button onClick={responseFacebook} >fb... fake</button>
        :
        <FacebookLogin
        appId="179178212706932"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}/>}
      </div>
      
    )
  }
}



export default Facebook

// response = {
//   accessToken: "EAACi9i24SnQBALSqXB6o9OJExhfvIsZCtzFOnbQTq7LxZBXZACMtjy3cTZBDc3pfrQ4OaojmnoH0HsrTDcdNWrEBhlMlJaW0f4c2USluq5sK4JtIGDSxLoIZCsXvTh9TZAg5l3tXhk0r9V1k91AEegpTX4mWEuvAhtun2fKDVSszGqABPH69PBCiCrNmjvJ1MtiptmwAiyPgZDZD",
//   email: "joha0033@gmail.com",
//   expiresIn: 6365,
//   id: "10102721646989662",
//   name: "Austin Johnston",
//   signedRequest: "PO21pODXwTtf11kf2TYYaycSfVsbaBDPZcZI0QdULsw.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUNtWjBEVHBpQUJYaGM2NVJoMTVqeXllU0VjbUFWcWZKR0w3MS05TmpOYVNybVdPaUNtd0E3OEJRc2xkT3NMUVZrMjUxYzNVVHlEMEpfTmRla0NGUlZQZ191dVBpTlFwS0NrbXZCYXlhUm9QeWxzZlVYcWdNSVQzRTl6RmZjTDV0eTJva0JsdnA2dzJXZEpWWTBxZFA3TVpYMEw1dWdxZUpzRW0wTWxQM05LZVdpc2NIMXRVakdtSkx4VnNVZFU3ei1KTkFtWm5BOExZMFJlOVlGV2NiYnNWcUV2ZUlLaFY0Wk1qTExyV1dYT3RFbS1rbFRQSl8xVHFTT3VDLVlGTnpoYlBlTmNjTHh6T19HQWFTNWQxVDdMWU9wSGpQSTlOMzVoX0h3QkUwX19kSmV3Y0dVQlY5NktDeGFnWHRMQ3Bta1BhaUdsZXdNQ01iWm1JbWl5dlZWTiIsImlzc3VlZF9hdCI6MTUyMTg0MzIzNSwidXNlcl9pZCI6IjEwMTAyNzIxNjQ2OTg5NjYyIn0",
//   userID: "10102721646989662"
// }
// response = {
// name: "Austin Johnston",
// email: "joha0033@gmail.com",
// passwords: 'test321',
// provider_id: "10102721646989662",
// access_token: res.access_token
// }
// console.log('FAKE facebook response: ', response.accessToken);
