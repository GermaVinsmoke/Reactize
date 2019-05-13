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
    ref={Slider => {
        this.Slider = Slider;
    }}
    className="slider">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Slider React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Slider />
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

      <ThirdHeader thirdHeader="Slider.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import Image1 from "../public/architecture-art-buildings-548094.jpg";
import Image2 from "../public/architecture-automobile-buildings-950223.jpg";
import Image3 from "../public/architecture-bridge-city-161853.jpg";
import Image4 from "../public/beach-clouds-dream-60217.jpg";

class Slider extends Component {
  componentDidMount() {
    const options = {
      indicators: true,
      height: 500,
      interval: 4000,
      duration: 500
    };
    M.Slider.init(this.Slider, options);
  }

  render() {
    return (
      <div
        ref={Slider => {
          this.Slider = Slider;
        }}
        className="slider"
      >
      {/* If you want fullscreen slider then add fullscreen to
      this div */}
        <ul className="slides">
          <li>
            <img src={Image1} />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={Image2} />
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={Image3} />
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={Image4} />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
`} />

      <Navigation align="left" link={`/slider`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;