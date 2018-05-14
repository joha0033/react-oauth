import React, { Component } from 'react';
import {connect} from "react-redux";

import { Route, withRouter } from 'react-router-dom';
import './App.css';



import Header from '../../Shared/Header/Header';
import About from '../../About/About';
import Profile from '../../Profile/Profile';
import Home from '../../Home/Home';
import Footer from '../../Shared/Footer/Footer';
import { AuthorizeToken } from '../../services/auth';

import { userActions } from "../../actions/userActions";


class App extends Component {
  constructor(props){
    super(props);
      this.state={
        username: "Austin"
      }

    this.reauthTokenIfPresent = this.reauthTokenIfPresent.bind(this);
  }

  componentDidMount() { 
    this.reauthTokenIfPresent()
  }

  reauthTokenIfPresent () {
    let token = sessionStorage.getItem('token')
    
    if(!token || token === '') {
      return;
    }

    AuthorizeToken(token).then((result) => {
      let token = sessionStorage.setItem('token', result.token);
      this.props.reauthenticate(token)
    }).catch(alert)
  }

  render() {
    
    return (
      <div>
        <style type="text/css">{`
          body {
            padding-top: 50px;
          }
          `}</style>
  
            <div className="App">
    
              <Route path='/' component={Header} />

              <div className='App-intro'>

                <Route exact path='/' component={Home} />

                <Route path='/profile' component={Profile} />

                <Route path='/home' component={Home}/>

                <Route path='/about' component={About}/>

              </div>

              <Route path='/' component={Footer}/>

            </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  const { user } = state
  return {
    user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    reauthenticate: () => {
      dispatch(userActions.resetToken())
    },
    unauthenitcate: () => {
      dispatch(userActions.logout())
    }
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(App))
