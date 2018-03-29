
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
// import Welcome from './Welcome/Welcome';
import About from './About/About';
// import Signup from './Signup/Signup';
import Private from './Private/Private';


const Routes = () => (
<BrowserRouter >
    <Switch>
    {/* <Route exact path="/" component={Welcome} /> */}
    {/* <Route path="/signup" component={Signup}/> */}
    <Route path="/private" component={Private}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
  </Switch>
</BrowserRouter>
);

export default Routes;
