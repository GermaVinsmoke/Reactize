import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import JsxCode from '../code/JsxCode';
import ThirdHeader from '../Headings/ThirdHeader';

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
    ref={Autocomplete => {
        this.Autocomplete = Autocomplete;
    }}
    className="autocomplete">
</div>`
            } />

            <ThirdHeader thirdHeader="Autocomplete.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { autoCompleteChanged } from "../actions/autoComplete";

class Autocomplete extends Component {
  componentDidMount() {
    const options = {
      //Data object for autocomplete
      data: {
        Apple: null,
        Acer: null,
        Alcatel: null,
        Asus: null,
        Huawei: null,
        HTC: null,
        Karbonn: null,
        Lenovo: null,
        Lava: null,
        LG: null,
        Microsoft: null,
        Meizu: null,
        Nokia: null,
        Oppo: null,
        OnePlus: null,
        Sony: null,
        Vivo: null,
        Yu: null,
        Google: "https://placehold.it/250x250"
      },

      //Limit of results autocomplete shows
      limit: 5,

      //Callback function for Autocomplete
      onAutocomplete() {
        console.log("Completed");
        let input = document.getElementById("autocomplete-input");
        console.log(input.value);
      },

      //Minimum number of characters before autocomplete starts.
      minLength: 1
    };
    M.Autocomplete.init(this.Autocomplete, options);
  }

  onAutoCompleteChange = event => {
    this.props.autoCompleteChanged(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">textsms</i>
                <input
                  ref={Autocomplete => {
                    this.Autocomplete = Autocomplete;
                  }}
                  type="text"
                  id="autocomplete-input"
                  className="autocomplete"
                  onChange={this.onAutoCompleteChange}
                  value={this.props.autoCompleteValue}
                />
                <label htmlFor="autocomplete-input">Autocomplete</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  autoCompleteValue: state.red.autoCompleteValue
});

export default connect(
  mapStateToProps,
  { autoCompleteChanged }
)(Autocomplete);`} />

            <Navigation align="left" link={`/autocomplete`} where='Prev' />
            <Navigation align="right" link={`/autocomplete/${next}`} where='Next' />
        </div>
    )
}

export default RefAndDOM;