import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';

const RefAndDOM = () => {
  return (
    <div>
      <SecondHeader secondHeader="Programatically"
        desc={`To remove toasts programatically call the dismiss function 
                `}
      />
      <JsxCode jsxCode={
        `<div
    ref={Materialbox => {
        this.Materialbox = Materialbox;
    }}
    className="materialboxed">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Toasts from "./Toasts";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Toasts React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Toasts />
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

      <ThirdHeader thirdHeader="Toasts.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Toasts extends Component {
  test() {
    const options = {
      html: "I am a toast!",
      inDuration: 300,
      outDuration: 375,
      displyLength: 4000,
      classes: "rounded",
      completeCallback: () => {
        console.log("dismissed");
      }
    };
    M.toast(options);
  }

  dismissThem() {
    M.Toast.dismissAll();
  }
  render() {
    return (
      <>
        <a onClick={this.test} className="btn">
          Toast!
        </a>
        <a onClick={this.dismissThem} className="btn">
          Dismiss All
        </a>
      </>
    );
  }
}

export default Toasts;
`} />

      <Navigation align="left" link={`/toasts`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;