import React from "react";
import {PostData} from "../../services/PostData";
import Facebook from "../Facebook/Facebook.js";
import { withRouter } from "react-router-dom";



class Signup extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			//  DEV ENV CHANGES INPUT TO FAKE DATA
			input: {
				email: "",
				password: ""
			},
			// HANDLES INPUT CHANGES
			blurred: {
				email: false,
				password: false
			},
			// HANDLES SUBMIT EVENT
			submitted: false
        };
        
        this.handleBlur = this.handleBlur.bind(this)
        this.handleInputChange= this.handleInputChange.bind(this)

		this.setToken = this.setToken.bind(this);
		this.dataToPost = this.dataToPost.bind(this);
		this.developmentData = this.developmentData.bind(this);
		this.callPostFetch = this.callPostFetch.bind(this);
		this.postForToken = this.postForToken.bind(this);
		this.facebookLogin = this.facebookLogin.bind(this);

	}
    ////////////////////////////////////////////////////////////////////////////////////
    // HANDLE FORM DATA INPUTS AND CHANGES

    // BLURRRRR CHANGES
    handleBlur(fieldName) {
        console.log(fieldName);
        this.setState(state => ({
            ...state,
            blurred: {
                ...state.blurred,
                [fieldName]: true
            }
        }))
        console.log(this.state);
        
    }

    // INPUT CHANGEES
    handleInputChange(newPartialInput) {
        console.log(newPartialInput)
        this.setState(state => ({
          ...state,
          input: {
            ...state.input,
            ...newPartialInput
          }
        }))
        console.log(this.state);
        
    }

    // VALIDATION
    validate() {
        const errors = {};
        const {input} = this.state;
        //control number of character also, regex
        if (!input.email) {
            errors.email = 'Email is required';
        }
        //control number of character also, regex
        if (!input.password) {
            errors.password = 'Password is required';
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }

    // END OF HANDLE FORM DATA
    ////////////////////////////////////////////////////////////////////////////////////
    

    postForToken(res) {


        let postData = this.dataToPost(res)
    
          return !postData
            ? console.log('missing some credential in the form... email or password') // ERROR MESSAGE
            : this.callPostFetch(postData)
    
    }


    dataToPost(data){

        let { email, password } = data
    
        let credentials = {
            email,
            password
          }
    
        return !!email && !!password
          ? credentials
          : false
    
    }

    callPostFetch(data) {
        console.log('data', data);
        
        let isNewUser = this.props.newUserFromHeader
    
        console.log('isNewUser', isNewUser);
        
    
        return (
    
          PostData(isNewUser, data).then((result) => {
            console.log(result);
            this.setToken(result)
    
          }).catch((error) => {
    
            this.props.showAlertFromHeader(error.toString())
    
          })
        )
    }

    setToken(data) {
        console.log(data);
        //CONSOLIDATE THESE FUNCTIONS??
        // CHECK EXISTENCE OF TOKEN AND NEWUSER
        sessionStorage.clear()
        sessionStorage.setItem("token", data.token);
        // console.log(!!data.userData.email);
        
        // sessionStorage.setItem("email", data.userData.email);
        this.props.signinValid() //PROP PASSED FROM APP TO HEADER TO HERE
        this.props.hideModal() // TRIGGERS HIDE MODAL FROM HEADER
        this.props.history.push("/profile"); // GO TO PROFILE, WILL REROUTE IF NOT VALID
    
    }

    render() {

        const { input, blurred } = this.state;
    
        const { errors, isValid } = this.validate();
    
        return (
    
          <div>
            <br/>
            <form
    
              // DATA SUBMIT
              onSubmit={
                (e) => {
    
                  // PREVENT DEFUALT
                  e.preventDefault()
    
                  return this.postForToken(this.state.input)
    
                  }
                  // START OF FORM
                }>
                    {/*  EMAIL INPUT*/}
                    <label>
    
                      Email:
    
                      <input
                        name="email"
                        type="text"
                        value={input.email}
                        onBlur={() => this.handleBlur('email')}
                        onChange={e => this.handleInputChange({email: e.target.value})}
                      />
    
                    </label>
    
                    <br/>
                    <br/>
    
                    {/*  PASSWORD INPUT */}
                    <label>
    
                      Password:
    
                      <input
                        name="password"
                        type="text"
                        value={input.password}
                        onBlur={() => this.handleBlur('password')}
                        onChange={e => this.handleInputChange({password: e.target.value})}
                      />
    
                    </label>
    
                    <br/>
                    <br/>
    
                      <input
                        touchend="submit"
                        type="submit"
                        value="Submit"
                        disabled={process.env.NODE_ENV !== 'development' ? !isValid : null}
                      />
    
                      <br/>
                      <br/>
    
                  <br/>
                  {blurred.email && !!errors.email && <span>{errors.email}</span>}
                  <br/>
                  {blurred.password && !!errors.password && <span>{errors.password}</span>}
    
                </form>
              <br/>
              <Facebook fbClick = {this.facebookLogin}/>
          </div>
        );
      }
    }
    
    export default withRouter(Signup)