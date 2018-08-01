import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from '../../Profile/Profile.Redirect';
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render (<PrivateRoute/>, div)
  ReactDOM.unmountComponentAtNode(div);
});