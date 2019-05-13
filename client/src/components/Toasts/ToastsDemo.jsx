import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Toasts.css';

class ToastsDemo extends Component {
    test() {
        const options = {
            html: "I am a toast!",
            inDuration: 300,
            outDuration: 375,
            displyLength: 4000,
            classes: "rounded",
            completeCallback: () => {
                console.log("dismissed");
            }
        };
        M.toast(options);
    }

    dismissThem() {
        M.Toast.dismissAll();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Materialize provides an easy way for you to send unobtrusive alerts to your users through toasts. 
                    These toasts are also placed and sized responsively, try it out by clicking the button below on different device sizes.`}
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col s6 m6 left">
                            <button onClick={this.test} className="btn waves-effect waves-light purple darken-4">
                                Toast!
                            </button>
                        </div>
                        <div className="col s6 m6 right">
                            <button onClick={this.dismissThem} className="btn waves-effect waves-light purple darken-4">
                                Dismiss All
                            </button>
                        </div>
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Toasts.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/toasts.html'>
                        {` Toasts `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Toasts to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/v022w750m5?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/programatically`} where='Next' />
            </div>
        );
    }
}


export default ToastsDemo;
