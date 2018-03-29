import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  // constructor(props){
  //     super(props);
  //
  //    };


  render() {

    const responseFacebook = (response) => {
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
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}/>}
      </div>

    )
  }
}



export default Facebook
