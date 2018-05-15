import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from '../../Shared/Header/Header';
import About from '../../About/About';
import Profile from '../../Profile/Profile';
import Home from '../../Home/Home';
import Footer from '../../Shared/Footer/Footer';

const App = () =>  (
  <div>
    <div className="App">
      <Route path='/' component={Header} />

      <div className='App-intro'>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About}/>
      </div>

      <Route path='/' component={Footer}/>
    </div>
  </div>

);

export default App;