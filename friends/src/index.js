import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose } from 'redux';
//applyMiddleware allows us to extend the funcitonality of redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//create a rootReducer in reducers/index using combine reducers
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
 applyMiddleware(thunk, logger)
));


ReactDOM.render(
<Provider store = {store}>
 <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
