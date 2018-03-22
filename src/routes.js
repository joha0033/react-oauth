import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Welcome from './Welcome/Welcome';
import Login from './Login/Login';
import Private from './Private/Private';


const Routes = () => (
<BrowserRouter >
    <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route path="/login" component={Login}/>
    <Route path="/private" component={Private}/>
    <Route path="/home" component={Home}/>
  </Switch>
</BrowserRouter>
);

export default Routes;
