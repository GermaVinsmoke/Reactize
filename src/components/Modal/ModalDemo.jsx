import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Modal.css';

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
                <div className="row">
                    <Description desc={`Use a modal for dialog boxes, 
                    confirmation messages, or other content that can be called up.`}
                    />
                </div>

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
                    className="modal"
                >
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-close waves-effect waves-red btn-flat">
                            Disagree
                        </a>
                        <a
                            className="modal-close waves-effect waves-green btn-flat"
                        >
                            Agree
                        </a>
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Modal.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a target='_blank' href='https://materializecss.com/modals.html'>
                        {` Modal `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Modal to get familiar with Reactize"
                />
                <a className="btn waves-effect waves-light purple darken-4" target="_blank" href="https://codesandbox.io/s/48w3kw6klw?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}


export default Modal;
