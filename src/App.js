import React, { Component } from 'react';
import './App.css';
// import Routes from './routes'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'
import { AuthorizeToken } from './services/auth.js'
import Welcome from './Welcome/Welcome';

class App extends Component {

  constructor(props){
    super(props);
      this.state={
        isAuthenticated: false
      }
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
  }

  signout() {
    sessionStorage.clear()
    this.setState({isAuthenticated: false})
  }

  signin() {
    this.setState({isAuthenticated: false})
    AuthorizeToken(sessionStorage.getItem('userData')).then((result) => {
      if(result.secret){
        this.setState({isAuthorized: true})
        sessionStorage.setItem("userAuthorized", true);
        console.log(sessionStorage.getItem('userAuthorized'));
      } else {
        this.signout()
        console.log('bad token');
      }
    })
    this.setState({isAuthenticated: true})
  }
  render() {

    return (

      <div className="App">
        <Header signin={this.signin} signout={this.signout}/>
        <div className="App-intro">
          <div>
            <Welcome auth={this.state.isAuthenticated} signout={this.signout}/>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
