
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Header from './Shared/Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Profile from './Profile/Profile';
import Footer from './Shared/Footer/Footer';

const Routes = () => (
<Router >
    
    <Route path='/' component={Header} />

      <div className='App-intro'>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About}/>
      </div>

      <Route path='/' component={Footer}/>
  
</Router>
);

export default Routes;
