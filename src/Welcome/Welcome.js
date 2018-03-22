
import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import Login from '../Login/Login'
import Private from '../Private/Private'

class Welcome extends Component {
  constructor(props) {

    super(props);

    this.state = {
      isAuthenticated: false,
     };
     this.signin = this.signin.bind(this);
     this.signout = this.signout.bind(this);
  }

  signout() {
    console.log('signout hit');
    this.setState({isAuthenticated: false})
  }

  signin() {
    console.log('signin hit');
    this.setState({isAuthenticated: true})
  }

  render() {

    const AuthButton = withRouter(
      ({ history }) =>

        this.state.isAuthenticated ? (
          <div>
            <p>You are Logged in!</p>
            <Private auth={this.state.isAuthenticated}/>
            <Link to="/private">profile</Link>
            <br/><br/>
            <button
              onClick={() => {
                this.signout(() => history.push("/"));
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <p><small>You are not logged in.</small></p>
            <Login
              auth={this.state.isAuthenticated}
              authToggle={this.signin}
            />
          </div>

        )
    );

    return (
      <div>

        <hr/>
        <AuthButton />
        <br/>

      </div>

    );
  }
}
export default Welcome;
