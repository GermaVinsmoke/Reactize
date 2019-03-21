import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';

const RefAndDOM = ({ next }) => {
  return (
    <div>
      <SecondHeader secondHeader="Ref and the DOM "
        desc={`Refs provide a way to access DOM nodes or React elements created in the render method. 
                Ref can be used for integration with third pary DOM libraries.  
                `}
      />
      <JsxCode jsxCode={
        `<div
    ref={Collapsible => {
        this.Collapsible = Collapsible;
    }}
    className="collapsible">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Collapsible from "./Collapsible";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Carousel React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Collapsible />
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

      <ThirdHeader thirdHeader="Collapsible.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";

class Collapsible extends Component {
  componentDidMount() {
    const options1 = {
      onOpenStart: () => {
        console.log("onOpenStart");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd");
      },
      onCloseStart: () => {
        console.log("onCloseStart");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd");
      },
      inDuration: 300,
      outDuration: 200
    };
    M.Collapsible.init(this.Collapsible1, options1);
  }
  render() {
    const { headingText, subHeading } = styles;
    return (
      <div className="container">
        <div className="row">
          <h3 style={headingText}>1. Collapsible with Preselected Section</h3>
          <ul
            ref={Collapsible => {
              this.Collapsible1 = Collapsible;
            }}
            className="collapsible"
          >
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">place</i>Second
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>Third
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  headingText: {
    fontSize: 30,
    fontWeight: 300
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 300
  }
};

export default Collapsible;`} />

      <Navigation align="left" link={`/collapsible`} where='Prev' />
      <Navigation align="right" link={`/collapsible/${next}`} where='Next' />
    </div>
  )
}

export default RefAndDOM;