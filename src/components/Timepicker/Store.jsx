import React from 'react';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';
import Navigation from '../Buttons/Navigation';

const Store = ({ next, prev }) => {
  return (
    <div>
      <SecondHeader secondHeader='Setting up Redux Store'
        desc="In index.js, one has to import the dependencies and setup the redux store" />
      <ThirdHeader thirdHeader="Importing Dependencies" />
      <JsxCode jsxCode={`import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducers";`} />

      <ThirdHeader thirdHeader="Creating Store" />
      <JsxCode jsxCode={`const store = createStore(reducer, {}, applyMiddleware(logger));`} />

      <ThirdHeader thirdHeader="Connecting store with Provider" />
      <JsxCode jsxCode={`const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);`} />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducers";

const store = createStore(reducer, {}, applyMiddleware(logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);`} />

      <Navigation align="left" link={`/timepicker/${prev}`} where='Prev' />
      <Navigation align="right" link={`/timepicker/${next}`} where='Next' />
    </div>
  )
}

export default Store;