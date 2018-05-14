import React from "react";
import Facebook from "../Facebook/Facebook.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { login } from '../../actions/userActions'

class Signup extends React.Component {
	constructor(props){
		super(props);
    // RESET LOGIN STATUS HERE
		this.state = {
			//  DEV ENV CHANGES INPUT TO FAKE DATA
			input: {
				email: "testLocal@gmail.com",
				password: "test321"
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
      this.handleSubmit = this.handleSubmit.bind(this)

	}
    ////////////////////////////////////////////////////////////////////////////////////
    // HANDLE FORM DATA INPUTS AND CHANGES

    // BLURRRRR CHANGES
    handleBlur(fieldName) {
        this.setState(state => ({
            ...state,
            blurred: {
                ...state.blurred,
                [fieldName]: true
            }
        }))
    }

    // INPUT CHANGEES
    handleInputChange(newPartialInput) {
        this.setState(state => ({
          ...state,
          input: {
            ...state.input,
            ...newPartialInput
          }
        }))
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

    handleSubmit(e) {
      e.preventDefault()

      this.setState({ submitted: true })
      // const { email, password } = this.state.input
      console.log('85 Signup - this.props.dispatch', this.props);
      // const { dispatch } = this.props
      if(this.state.input.password && this.state.input.email){
        console.log('86 Signup - dispatch login');
        
        this.props.login(this.state.input).then(() => {
          console.log(this.props);
        })

      }
      this.props.hideModal()
      
      
    }
    

    render() {

        const { input, blurred } = this.state;
    
        const { errors, isValid } = this.validate();
    
        return (
    
          <div>
            <br/>
            <form
    
              // DATA SUBMIT
              onSubmit={ this.handleSubmit }>
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
    
    

function mapStateToProps(state) {
  const { auth, user } = state;
  return {
      auth, 
      user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login())
    }
  }
};

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))