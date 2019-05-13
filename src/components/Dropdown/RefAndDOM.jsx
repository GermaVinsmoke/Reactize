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
    ref={Dropdown => {
        this.Dropdown = Dropdown;
    }}
    className="dropdown">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Dropdown React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Dropdown />
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

      <ThirdHeader thirdHeader="Dropdown.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materiDropdown

class Dropdown extends Component {
  componentDidMount() {
    const options = {
      hover: true,
      closeOnClick: true,
      alignment: "right",
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
    M.Dropdown.init(this.Dropdown, options);
  }

  render() {
    return (
      <>
        <a
          ref={Dropdown => {
            this.Dropdown = Dropdown;
          }}
          className="dropdown-trigger btn waves-effect"
          href="#"
          data-target="dropdown1"
        >
          Drop Me!
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li>
            <a href="#!">three</a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">view_module</i>four
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>five
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Dropdown;
`} />

      <Navigation align="left" link={`/dropdown`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;