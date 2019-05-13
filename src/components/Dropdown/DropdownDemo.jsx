import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Dropdown.css';

class Collapsible extends Component {
    componentDidMount() {
        const options = {
            // hover: true,
            closeOnClick: true,
            alignment: "right",
            coverTrigger: false,
            inDuration: 300,
            outDuration: 200
        };
        M.Dropdown.init(this.Dropdown, options);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Add a dropdown list to any button.`}
                    />
                </div>

                <a href="#!"
                    ref={Dropdown => {
                        this.Dropdown = Dropdown;
                    }}
                    className="dropdown-trigger btn waves-effect waves-light purple darken-4"
                    data-target="dropdown1"
                >
                    Drop Me!
                </a>

                <ul id="dropdown1" className="dropdown-content">
                    <li>
                        <a href="#!">one</a>
                    </li>
                    <li>
                        <a href="#!">two</a>
                    </li>
                    <li>
                        <a href="#!">three</a>
                    </li>
                    <li>
                        <a href="#!">
                            <i className="material-icons">view_module</i>four
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <i className="material-icons">cloud</i>five
                        </a>
                    </li>
                </ul>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Dropdown.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/dropdown.html'>
                        {` Dropdown `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Carousel to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/myno6mymyp?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}


export default Collapsible;
