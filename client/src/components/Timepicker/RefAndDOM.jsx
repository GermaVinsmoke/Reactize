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
    ref={Timepicker => {
        this.Timepicker = Timepicker;
    }}
    className="timepicker">
</div>`
      } />

      <ThirdHeader thirdHeader="Timepicker.js" />
      <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { timeChanged } from "../actions/timeAction";

class Picker extends Component {
  componentDidMount() {
    let context = this;
    const timePickerOptions = {
      duration: 350,
      defaultTime: "now",
      vibrate: true,
      twelveHour: false,
      onSelect(hour, minute) {
        // console.log(hour);
        context.props.timeChanged(hour, minute);
      }
    };
    M.Timepicker.init(this.Timepicker, timePickerOptions);

    //let instance = M.Timepicker.getInstance(this.Timepicker);
    // instance.open();
  }
  render() {
    return (
      <div>
        <label>Timepicker</label>
        <input
          ref={Timepicker => {
            this.Timepicker = Timepicker;
          }}
          type="text"
          className="timepicker"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hour: state.red.hour,
  minute: state.red.minute
});

export default connect(
  mapStateToProps,
  { timeChanged }
)(Picker);`} />

      <Navigation align="left" link={`/timepicker`} where='Prev' />
      <Navigation align="right" link={`/timepicker/${next}`} where='Next' />
    </div>
  )
}

export default RefAndDOM;