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
    ref={Tooltip => {
        this.Tooltip = Tooltip;
    }}
    className="tooltipped">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Tooltips from "./Tooltips";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Tooltips React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Tooltips />
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

      <ThirdHeader thirdHeader="Tooltips.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Tooltips extends Component {
  componentDidMount() {
    const options = {
      inDuration: 300,
      outDuration: 250,
      exitDelay: 0,
      enterDelay: 250,
      transitionMovement: 10,
      position: "bottom",
      margin: 5
    };
    M.Tooltip.init(this.Tooltip1, options);
    M.Tooltip.init(this.Tooltip2);
    M.Tooltip.init(this.Tooltip3);
    M.Tooltip.init(this.Tooltip4);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col s3">
              <a
                ref={Tooltip => {
                  this.Tooltip1 = Tooltip;
                }}
                className="btn tooltipped"
                data-position="bottom"
                data-tooltip="I am a tooltip"
              >
                Bottom
              </a>
            </div>
            <div className="col s3">
              <a
                ref={Tooltip => {
                  this.Tooltip2 = Tooltip;
                }}
                className="btn tooltipped"
                data-position="top"
                data-tooltip="I am a tooltip"
              >
                Top
              </a>
            </div>
            <div className="col s3">
              <a
                ref={Tooltip => {
                  this.Tooltip3 = Tooltip;
                }}
                className="btn tooltipped"
                data-position="right"
                data-tooltip="I am a tooltip"
              >
                Right
              </a>
            </div>
            <div className="col s3">
              <a
                ref={Tooltip => {
                  this.Tooltip4 = Tooltip;
                }}
                className="btn tooltipped"
                data-position="left"
                data-tooltip="I am a tooltip"
              >
                Left
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tooltips;
`} />

      <Navigation align="left" link={`/tooltips`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;