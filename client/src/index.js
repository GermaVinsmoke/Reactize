import React from 'react';
import { hydrate, render } from 'react-dom';
import App from '../src/components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../src/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, {}, applyMiddleware(logger));

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
	hydrate(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	);
} else {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	);
}

registerServiceWorker();
