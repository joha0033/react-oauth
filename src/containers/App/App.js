import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import About from '../../About/About';
import Profile from '../../Profile/Profile';
import Home from '../../Home/Home';
import Footer from '../../components/Footer/Footer.jsx';
import Navbar from "../Navbar/Navbar"
import Signin from "../CredentialsModal/SigninModal"
import Register from "../CredentialsModal/RegisterModal"

const App = () =>  (
  <div>
    <div className="App">
      <Route path="/" component={Navbar} />

      <div className='App-intro'>
        <Route path="/" component={Signin} />
        <Route path="/" component={Register} />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About}/>
      </div>

      <Route path='/' component={Footer}/>
    </div>
  </div>

);

export default App;