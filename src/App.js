import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'

import { AuthorizeToken } from './services/auth.js'

import Header from './Shared/Header/Header'
import About from './About/About'
import Profile from './Profile/Profile'
import Home from './Home/Home'
import Footer from './Shared/Footer/Footer'



class App extends Component {

  constructor(props){

    super(props);
      this.state={
        isAuthenticated: false
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
    // this.loadIfTokenPresent()
  }

  loadIfTokenPresent () {

    let token = sessionStorage.getItem('token')
    if(!token || token === '') {

      return;
    }

    AuthorizeToken(sessionStorage.getItem('token')).then((result) => {

      console.log(result);
      sessionStorage.setItem('token', result.token);
      sessionStorage.setItem('email', result.payload.userData.email)
      sessionStorage.setItem('userData', result.payload.userData)
      let data = sessionStorage.getItem('email')
      console.log(data);
      this.setState({isAuthenticated: true})
    }).catch(alert)

  }

  signin() {

    this.setState({isAuthenticated: true})

  }

  render() {


    return (
      <div>
        <style type="text/css">{`
          body {
            padding-top: 50px;
          }
          `}</style>
        <Router>


            <div className="App">

              <Route path='/' render={(props) => {
                return (<Header
                  signin = {this.signin}
                  signoutFromApp = {this.signout}
                  tokenChangeFromApp = {this.state.isAuthenticated}
                />)
              }} />




              <div className='App-intro'>

                <Route exact path='/' render={(props) => {
                  return (<Home />)
                }}/>

                <Route exact path='/profile' render={(props) => {
                  return (<Profile
                    tokenValidationFromApp = {this.state.isAuthenticated}
                  />)
                }} />

                <Route path='/home' component={Home}/>

                <Route path='/about' component={About}/>

              </div>

              <Route path='/' component={Footer}/>

            </div>



        </Router>

      </div>

    );
  }
}

export default App;
