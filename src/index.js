import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux"
import store from "./store"
import { Route, Router} from 'react-router-dom'
import history from "./_Helpers/history"

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);


registerServiceWorker();