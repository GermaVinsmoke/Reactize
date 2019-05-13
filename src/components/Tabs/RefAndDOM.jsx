import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';

const RefAndDOM = () => {
  return (
    <div>
      <SecondHeader secondHeader="Ref and the DOM "
        desc={`Refs provide a way to access DOM nodes or React elements created in the render method. 
                Ref can be used for integration with third pary DOM libraries.  
                `}
      />
      <JsxCode jsxCode={
        `<div
    ref={Tabs => {
        this.Tabs = Tabs;
    }}
    className="tabs">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Tabs React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Tabs />
    </div>
  );
}

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
`} />

      <ThirdHeader thirdHeader="Tabs.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Tabs extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <>
        <ul
          ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          class="tabs"
        >
          <li class="tab col s3">
            <a href="#test-swipe-1">Test 1</a>
          </li>
          <li class="tab col s3">
            <a href="#test-swipe-2">Test 2</a>
          </li>
          <li class="tab col s3">
            <a href="#test-swipe-3">Test 3</a>
          </li>
        </ul>

        <div id="test-swipe-1" class="col s12 blue">
          Test 1
        </div>
        <div id="test-swipe-2" class="col s12 red">
          Test 2
        </div>
        <div id="test-swipe-3" class="col s12 green">
          Test 3
        </div>
      </>
    );
  }
}

export default Tabs;
`} />

      <Navigation align="left" link={`/tabs`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;