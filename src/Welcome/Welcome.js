
import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import Login from '../Login/Login'
class Welcome extends Component {
  constructor(props) {

    super(props);

    this.state = {
      isAuthenticated: false,
      loginError: false,
      redirect: false
     };
     this.signin = this.signin.bind(this);
     this.signout = this.signout.bind(this);
  }

  signout() {
    this.setState({isAuthenticated: false})
  }
  signin() {
    this.setState({isAuthenticated: true})
  }

  render() {

    const AuthButton = withRouter(
      ({ history }) =>
        this.state.isAuthenticated ? (
          <div>
            <p>You are Logged in!</p>
            <Link className="Links" to="/private">Private Page</Link>
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

        <h2 id="welcomeText">Welcome!</h2>
        <hr/>
        <AuthButton />
        <br/>
        {/* {this.state.isAuthenticated ?
        <Link className="Links" to="/private">Private Page</Link> :
        null } */}

      </div>

    );
  }
}
export default Welcome;
