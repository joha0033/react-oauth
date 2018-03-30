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
    console.log('signout hit');
    localStorage.clear()
    this.setState({isAuthenticated: false})

  }


  componentWillMount() {
    this.loadIfTokenPresent()
  }

  loadIfTokenPresent () {
    console.log('loadToken hit');
    let token = localStorage.getItem('token')
    if(!token || token === '') {
      console.log('no token');
      return;
    }

    AuthorizeToken(localStorage.getItem('token')).then((result) => {
      console.log('AuthorizeToken hit');
      localStorage.setItem('token', result.token);
      this.setState({isAuthenticated: true})
    }).catch()

  }

  signin() {
    console.log('signin hit in App 60.');
    this.setState({isAuthenticated: true})
  }

  render() {


    return (
      <div>
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
