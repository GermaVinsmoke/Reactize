import React, { Component } from 'react';
import M from "materialize-css";
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';

class Modal extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }
  render() {
    return (
      <div>
        <SecondHeader secondHeader="Bottom Sheet"
          desc={`Refs provide a way to access DOM nodes or React elements created in the render method. 
                Ref can be used for integration with third pary DOM libraries.  
                `}
        />
        <button
          className="waves-effect waves-light btn modal-trigger purple darken-4"
          data-target="modal1"
        >
          Modal
                </button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal bottom-sheet"
        >
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-red btn-flat">
              Disagree
                        </button>
            <button
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
                        </button>
          </div>
        </div>
        <JsxCode jsxCode={
          `<div
    ref={Modal => {
        this.Modal = Modal;
    }}
    className="modal">
</div>`
        } />

        <ThirdHeader thirdHeader="index.js" />
        <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Modal React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Modal />
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

        <ThirdHeader thirdHeader="Modal.js" />
        <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Modal
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal bottom-sheet"
        >
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;

`} />

        <Navigation align="left" link={`/modal`} where='Prev' />
      </div>
    )
  }
}

export default Modal;