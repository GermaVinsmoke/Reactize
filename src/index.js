import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App.jsx';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../src/reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, {}, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
