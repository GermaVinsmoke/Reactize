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
    ref={Parallax => {
        this.Parallax = Parallax;
    }}
    className="parallax">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Parallax from "./Parallax";

function App() {
  const { headingText } = styles;

  return (
    <>
      <div>
        <h2 style={headingText} className="flow-text">
          Parallax React Demo
        </h2>
        <p className="flow-text">
          Learn how to use Materialize CSS framework in ReactJS
        </p>
      </div>
      <Parallax />
    </>
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

      <ThirdHeader thirdHeader="Parallax.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Image1 from "../public/parallax2.jpg";
import Image2 from "../public/parallax1.jpg";

class Parallax extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
    M.Parallax.init(this.Parallax2);
  }

  render() {
    return (
      <>
        <div className="parallax-container">
          <div
            ref={Parallax => {
              this.Parallax1 = Parallax;
            }}
            className="parallax"
          >
            <img src={Image2} />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <div
          ref={Parallax => {
            this.Parallax2 = Parallax;
          }}
          className="parallax-container"
        >
          <div className="parallax">
            <img src={Image1} />
          </div>
        </div>
      </>
    );
  }
}

export default Parallax;
`} />

      <Navigation align="left" link={`/parallax`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;