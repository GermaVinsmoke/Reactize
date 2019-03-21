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
    ref={Sidenav => {
        this.Sidenav = Sidenav;
    }}
    className="sidenav">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Sidenav from "./Sidenav";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Sidenav React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Sidenav />
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

      <ThirdHeader thirdHeader="Sidenav.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import image1 from "../public/parallax2.jpg";
import image2 from "../public/architecture-bridge-city-161853.jpg";

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.open();
    console.log(instance.isOpen);
  }
  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav"
        >
          <li>
            <div className="user-view">
              <div className="background">
                <img src={image2} />
              </div>
              <a href="#user">
                <img className="circle" src={image1} />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidenav;
`} />

      <Navigation align="left" link={`/sidenav`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;