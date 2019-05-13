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
    ref={Datepicker => {
        this.Datepicker = Datepicker;
    }}
    className="datepicker">
</div>`
            } />

            <ThirdHeader thirdHeader="Datepicker.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { dateChanged } from "../actions/dateAction";
import { connect } from "react-redux";

class Picker extends Component {
  componentDidMount() {
    let context = this;
    const datePickerOptions = {
      autoClose: true,
      // minDate: new Date(2018, 11, 3)
      // defaultDate: new Date(2018, 1, 3),
      // setDefaultDate: true
      onSelect(date) {
        console.log(date);
        context.props.dateChanged(date);
        console.log(context.props.date);
      }
    };
    const dateElement = M.Datepicker.init(this.Datepicker, datePickerOptions);

    // let instance = M.Datepicker.getInstance(this.Datepicker);
    // instance.setDate(new Date(2018, 2, 3));
  }

  render() {
    return (
      <div>
        <label>Datepicker</label>
        <input
          ref={DatePicker => {
            this.Datepicker = DatePicker;
          }}
          id="date-picker"
          type="text"
          className="datepicker"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.red.date
});

export default connect(
  mapStateToProps,
  { dateChanged }
)(Picker);`} />

            <Navigation align="left" link={`/datepicker`} where='Prev' />
            <Navigation align="right" link={`/datepicker/${next}`} where='Next' />
        </div>
    )
}

export default RefAndDOM;