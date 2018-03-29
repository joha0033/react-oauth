import React, { Component } from 'react';
import './App.css';
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import { AuthorizeToken } from './services/auth.js'
import Private from './Private/Private'
import Home from './Home/Home'

class App extends Component {

  constructor(props){
    super(props);
      this.state={
        isAuthenticated: Boolean()
      }
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.loadIfTokenPresent = this.loadIfTokenPresent.bind(this);
  }


  signout() {
    sessionStorage.clear()
    this.setState({isAuthenticated: false})
  }


  componentWillMount() {
    console.log(sessionStorage);
    this.loadIfTokenPresent()

  }

  loadIfTokenPresent () {
    let token = sessionStorage.getItem('token')

    if(!token || token === '') {
     return;
    }

    AuthorizeToken(sessionStorage.getItem('token')).then((result) => {
      console.log(result.token);
      sessionStorage.setItem('token', result.token);
      this.setState({isAuthenticated: true})
    }).catch(alert)

  }

  signin() {
    console.log('sign in hit');
    this.setState({isAuthenticated: true})
  }

  render() {

    const AuthButton =
      () =>
        this.state.isAuthenticated ? (
          <div>
            <p>You are Logged in!</p>
            <Private
              path='/protected'
              component={Private}
            />
            <button
              onClick={this.signout}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <p><small>You are not logged in </small></p>
            <Home />
          </div>)

    return (

      <div className="App">
        <Header signin={this.signin} signoutHeader={this.signout}/>
        <div className="App-intro">
          <div>
            {/* <Welcome auth={this.state.isAuthenticated} signout={this.signout}/> */}
            <AuthButton so={this.signout}/>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
