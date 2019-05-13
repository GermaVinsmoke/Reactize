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
                `<select
    ref={FormSelect => {
        this.FormSelect = FormSelect;
    }}
    onChange={this.handleChange}
>`
            } />

            <ThirdHeader thirdHeader="Select.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { selectChanged } from "../actions/selectAction";

class Select extends Component {
  componentDidMount() {
    M.FormSelect.init(this.FormSelect);
  }
  handleChange = event => {
    this.props.selectChanged(event.target.value);
  };
  render() {
    return (
      <div className="input-field col s12">
        <select
          ref={FormSelect => {
            this.FormSelect = FormSelect;
          }}
          onChange={this.handleChange}
        >
          <option value="0" disabled defaultValue>
            Choose your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.red.selectValue
});

export default connect(
  mapStateToProps,
  { selectChanged }
)(Select);
`} />

            <Navigation align="left" link={`/select`} where='Prev' />
            <Navigation align="right" link={`/select/${next}`} where='Next' />
        </div>
    )
}

export default RefAndDOM;