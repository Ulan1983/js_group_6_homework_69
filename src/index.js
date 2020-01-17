import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import dishReducer from './store/reducers/dishReducer';
import ordersReducer from "./store/reducers/ordersReducer";

import './index.css';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	dishes: dishReducer,
	orders: ordersReducer
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);


ReactDOM.render(app, document.getElementById('root'));


