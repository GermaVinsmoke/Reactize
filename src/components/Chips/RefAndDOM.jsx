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
    ref={Chips => {
        this.Chips = Chips;
    }}
    className="chips">
</div>`
      } />

      <ThirdHeader thirdHeader="index.js" />
      <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Chips from "./Chips";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Chips React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Chips />
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

      <ThirdHeader thirdHeader="Chips.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import image1 from "../public/parallax2.jpg";

class Chips extends Component {
  componentDidMount() {
    const options1 = {
      data: [
        {
          tag: "Orange"
        },
        {
          tag: "Guavava"
        },
        {
          tag: "Strawberry"
        }
      ]
    };
    const options2 = {
      placeholder: "Enter a tag",
      secondaryPlaceholder: "+Tag"
    };
    const options3 = {
      autocompleteOptions: {
        data: {
          Apple: null,
          Microsoft: null,
          Google: null
        },
        limit: Infinity,
        minLength: 1
      }
    };
    M.Chips.init(this.Chips);
    M.Chips.init(this.Chips1, options1);
    M.Chips.init(this.Chips2, options2);
    M.Chips.init(this.Chips3, options3);

    let instance = M.Chips.getInstance(this.Chips);
    instance.addChip({
      tag: "Good"
    });
    instance.selectChip(0);
    // instance.deleteChip(0);
  }

  render() {
    const { labelText } = styles;
    return (
      <div>
        <div className="row">
          <div className="chip">
            <img src={image1} alt="Contact Person" />
            Jane Doe
          </div>
          <div className="chip">
            Tag
            <i className="close material-icons">close</i>
          </div>
        </div>
        <label style={labelText}>Add tags</label>
        <div
          ref={Chips => {
            this.Chips = Chips;
          }}
          className="chips"
        />
        <label style={labelText}>Set initial tags</label>
        <div
          ref={Chips => {
            this.Chips1 = Chips;
          }}
          className="chips chips-initial"
        />
        <label style={labelText}>
          Use placeholders and override hint texts
        </label>
        <div
          ref={Chips => {
            this.Chips2 = Chips;
          }}
          className="chips chips-placeholder"
        />
        <label style={labelText}>Use autocomplete with chips</label>
        <div
          ref={Chips => {
            this.Chips3 = Chips;
          }}
          className="chips chips-autocomplete"
        />
      </div>
    );
  }
}
const styles = {
  labelText: {
    fontSize: 14
  }
};

export default Chips;
`} />

      <Navigation align="left" link={`/chips`} where='Prev' />
    </div>
  )
}

export default RefAndDOM;