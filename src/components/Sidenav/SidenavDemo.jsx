import React from "react";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Sidenav.css';

const SidenavDemo = ({ match }) => {
    return (
        <div>
            <div className="row">
                <Description desc={`This is a slide out menu. 
                    You can add a dropdown to your sidebar by using our collapsible component.`}
                />
            </div>

            <a className="btn waves-effect waves-light purple darken-4" href="https://4lym1k7z9.codesandbox.io/">Open Demo</a>

            <SecondHeader secondHeader="Setup"
                desc="Follow this basic directory structure for MaterializeCSS along with React"
            />
            <ThirdHeader thirdHeader="Project Structure" />
            <MarkupCode
                markupCode={
                    `public/\n|--index.html\nsrc/\n|--Images/\n\t|--Image1.jpg\n\t|--Image2.jpg\n|--Sidenav.js\n|--index.js\n--package.json`
                }
            />
            <ThirdHeader thirdHeader="Options and Methods" />
            <p>For more info related to Options and Methods please check Materialize
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://materializecss.com/sidenav.html'>
                    {` Sidenav `}
                </a>docs</p>
            <SecondHeader
                secondHeader="CodeSandbox Demo"
                desc="Play on this working Demo of Sidenav to get familiar with Reactize"
            />
            <a
                className="btn waves-effect waves-light purple darken-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codesandbox.io/s/4lym1k7z9?fontsize=14">
                Edit on CodeSandbox<i className="material-icons right">edit</i>
            </a>
            <Navigation align='right' link={`${match.url}/ref_and_the_dom`} where='Next' />
        </div>
    );
}

export default SidenavDemo;
