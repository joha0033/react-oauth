import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import About from '../About/About';
// import EditProfile from '../../Profile/Profile.Edit';
// import Profile from '../../Profile/Profile.component';
import Home from '../../Home/Home';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header'
import SigninModalContainer from '../../containers/Modals/Modal.containers/SigninModal.container'
// import ModalContainer from '../../containers/Modals/Modal.containers/'
import RegisterModalContainer from '../../containers/Modals/Modal.containers/RegisterModal.container'
import PrivateRoute from '../../Profile/Profile.Redirect'
import EditPrivateRoute from '../../Profile/Profile.Edit.Redirect'
import PostsPrivateRoute from '../../containers/Profile/PostPage/Post'
import {  withRouter, Redirect } from 'react-router-dom'

const App = (props) =>  (
  <div>
    <div className='App'>
      <Route path='/' component={Header} />

      <div className='App-intro'>
        <Route path='/' component={SigninModalContainer} />
        <Route path='/trello-board' component={() => { 
          window.open('https://trello.com/b/87NBQqI8/smallthingstech', '_blank')
          return (<Redirect to="/"/>)
        }}/>
        <Route path='/github-frontend' component={() => {
          window.open('https://github.com/joha0033/smAllThingsTech', '_blank')
          return (<Redirect to="/"/>)
        }}/>
        <Route path='/github-backend' component={() => {
          window.open('https://github.com/joha0033/smAllThingsBackend', '_blank')
          return (<Redirect to="/"/>)
          }}/>
       
        {/* <Route path='/' component={ModalContainer} /> */}
        <Route path='/' component={RegisterModalContainer} />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />

        <Route exact path='/profile/:username' render={(props) => {
          return <PrivateRoute {...props} />
        }}/>
        <Route exact path='/profile/:username/edit' render={(props) => {
          return <EditPrivateRoute {...props} />
        }}/>
        <Route exact path='/profile/:username/posts' render={(props) => {
          return <PostsPrivateRoute {...props} />
        }}/>
        
        <Route path='/about' component={About}/>
      </div>

      <Route path='/' component={Footer}/>
    </div>
  </div>

);

export default withRouter(App)