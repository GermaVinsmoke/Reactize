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
    ref={Materialbox => {
        this.Materialbox = Materialbox;
    }}
    className="materialboxed">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import MaterialBox from "./MaterialBox";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        MaterialBox React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <MaterialBox />
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

      <ThirdHeader thirdHeader="MaterialBox.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import image from "../public/sample-1.jpg";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class MaterialBox extends Component {
  componentDidMount() {
    M.Materialbox.init(this.Materialbox);
  }

  render() {
    return (
      <img
        ref={Materialbox => {
          this.Materialbox = Materialbox;
        }}
        className="materialboxed col s12 m9"
        alt="1"
        width="650"
        src={image}
        data-caption="Sample Image"
      />
    );
  }
}

export default MaterialBox;
`} />

      <Navigation align="left" link={`/material_box`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;