import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Collapsible.css';

class CollapsibleDemo extends Component {
    componentDidMount() {
        const options1 = {
            inDuration: 300,
            outDuration: 200
        };
        M.Collapsible.init(this.Collapsible1, options1);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Collapsibles are accordion elements that expand when clicked on.
                They allow you to hide content that is not immediately relevant to the user.`}
                    />
                </div>

                <ul
                    ref={Collapsible => {
                        this.Collapsible1 = Collapsible;
                    }}
                    className="collapsible"
                >
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">filter_drama</i>First
                            </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">place</i>Second
                            </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li className="active">
                        <div className="collapsible-header">
                            <i className="material-icons">whatshot</i>Third
                            </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                </ul>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Collapsible.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/collapsible.html'>
                        {` Collapsible `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Carousel to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/q5o4v1w54?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}


export default CollapsibleDemo;
