import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'; //shortcut to write
import allReducers from './reducers';
import App from './components/app';

const store = createStore(allReducers); //create one big object to store all data

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
