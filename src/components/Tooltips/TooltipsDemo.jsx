import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Tooltips.css';

class Tooltips extends Component {
    componentDidMount() {
        const options = {
            inDuration: 300,
            outDuration: 250,
            exitDelay: 0,
            enterDelay: 250,
            transitionMovement: 10,
            position: "bottom",
            margin: 5
        };
        M.Tooltip.init(this.Tooltip1, options);
        M.Tooltip.init(this.Tooltip2);
        M.Tooltip.init(this.Tooltip3);
        M.Tooltip.init(this.Tooltip4);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Tooltips are small, interactive, textual hints for mainly graphical elements. 
                    When using icons for actions you can use a tooltip to give people clarification on its function.`}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col m6 s6">
                            <a
                                ref={Tooltip => {
                                    this.Tooltip1 = Tooltip;
                                }}
                                className="btn purple darken-4 waves-effect waves-light tooltipped left"
                                data-position="bottom"
                                data-tooltip="I am a tooltip"
                            >
                                Bottom
                        </a>
                        </div>
                        <div className="col m6 s6">
                            <a
                                ref={Tooltip => {
                                    this.Tooltip2 = Tooltip;
                                }}
                                className="btn purple darken-4 waves-effect waves-light tooltipped right"
                                data-position="top"
                                data-tooltip="I am a tooltip"
                            >
                                Top
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m6 s6">
                            <a
                                ref={Tooltip => {
                                    this.Tooltip3 = Tooltip;
                                }}
                                className="btn purple darken-4 waves-effect waves-light tooltipped left"
                                data-position="right"
                                data-tooltip="I am a tooltip"
                            >
                                Right
                        </a>
                        </div>
                        <div className="col m6 s6">
                            <a
                                ref={Tooltip => {
                                    this.Tooltip4 = Tooltip;
                                }}
                                className="btn purple darken-4 waves-effect waves-light tooltipped right"
                                data-position="left"
                                data-tooltip="I am a tooltip"
                            >
                                Left
                        </a>
                        </div>
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Tooltips.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a target='_blank' href='https://materializecss.com/tooltips.html'>
                        {` Tooltips `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Tooltips to get familiar with Reactize"
                />
                <a className="btn waves-effect waves-light purple darken-4" target="_blank" href="https://codesandbox.io/s/30vywz9xpm?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div >
        );
    }
}


export default Tooltips;
