import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Tabs.css';

class Tabs extends Component {
    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. 
                    Then when you click on each tab, only the container with the corresponding tab id will become visible.`}
                    />
                </div>

                <ul
                    ref={Tabs => {
                        this.Tabs = Tabs;
                    }}
                    id="tabs-swipe-demo"
                    className="tabs"
                >
                    <li className="tab col s3">
                        <a href="#test-swipe-1">Test 1</a>
                    </li>
                    <li className="tab col s3">
                        <a href="#test-swipe-2">Test 2</a>
                    </li>
                    <li className="tab col s3">
                        <a href="#test-swipe-3">Test 3</a>
                    </li>
                </ul>

                <div id="test-swipe-1" className="col m12 s12 blue">
                    Test 1
                </div>
                <div id="test-swipe-2" className="col m12 s12 red">
                    Test 2
                </div>
                <div id="test-swipe-3" className="col m12 s12 green">
                    Test 3
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Tabs.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a target='_blank' href='https://materializecss.com/tabs.html'>
                        {` Tabs `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Tabs to get familiar with Reactize"
                />
                <a className="btn waves-effect waves-light purple darken-4" target="_blank" href="https://codesandbox.io/s/5k86kjmr4p?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>

                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}


export default Tabs;
