import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes'


class App extends Component {
  constructor(){
    super();
        this.state={
        appName: "Login with Facebook and Google using ReactJS and RESTful APIs"
    }
  }


  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my attempt a Facebook OAuth</h1>
        </header>
        <div className="App-intro">
          <div>
            <div>
              <Routes name={this.state.appName}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
