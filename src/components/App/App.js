import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import About from '../About/About';
// import EditProfile from '../../Profile/Profile.Edit';
import Profile from '../../Profile/Profile.component';
import Home from '../../Home/Home';
import Footer from '../Footer/Footer.jsx';
import Header from "../Header/Header"
import Signin from "../../containers/Modals/Modal.containers/SigninModal.container"
import Register from "../../containers/Modals/Modal.containers/RegisterModal.container"

const App = () =>  (
  <div>
    <div className="App">
      <Route path="/" component={Header} />

      <div className='App-intro'>
        <Route path="/" component={Signin} />
        <Route path="/" component={Register} />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        {/* <Route path= {`/profile/${username}/edit`} component={EditProfile} /> */}
        <Route path='/about' component={About}/>
      </div>

      <Route path='/' component={Footer}/>
    </div>
  </div>

);

export default App;