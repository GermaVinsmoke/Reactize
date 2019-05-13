import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import JsxCode from '../code/JsxCode';
import ThirdHeader from '../Headings/ThirdHeader';

const RefAndDOM = ({ next }) => {
    return (
        <div>
            <SecondHeader secondHeader="Counter" />

            <ThirdHeader thirdHeader="Counter.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { textChanged, textAreaChanged } from "../actions/textAction";

class Counter extends Component {
  componentDidMount() {
    let input = document.getElementById("input_text");

    let input2 = document.getElementById("textarea2");
    M.CharacterCounter.init(input);
    M.CharacterCounter.init(input2);
    //Auto Resize
    M.textareaAutoResize(input2);
  }

  onTextChange = event => {
    this.props.textChanged(event.target.value);
  };

  onTextAreaChange = event => {
    this.props.textAreaChanged(event.target.value);
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="input_text"
                type="text"
                maxLength="10"
                onChange={this.onTextChange}
                value={this.props.text}
              />
              <label htmlFor="input_text">Input text</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea2"
                className="materialize-textarea"
                data-length="120"
                onChange={this.onTextAreaChange}
                value={this.props.textArea}
              />
              <label htmlFor="textarea2">Textarea</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.red.text,
  textArea: state.red.textArea
});

export default connect(
  mapStateToProps,
  { textChanged, textAreaChanged }
)(Counter);`} />

            <Navigation align="left" link={`/text_input`} where='Prev' />
            <Navigation align="right" link={`/text_input/${next}`} where='Next' />
        </div>
    )
}

export default RefAndDOM;