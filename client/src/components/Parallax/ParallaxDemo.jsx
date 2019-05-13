import React from "react";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import './Parallax.css';

const Parallax = ({ match }) => {
    return (
        <div>
            <div className="row">
                <Description desc={`Parallax is an effect where the background content or image in this case, 
                    is moved at a different speed than the foreground content while scrolling. 
                    Check out the demo to get a better idea of it.`}
                />
            </div>

            <a className="btn purple darken-4" href='https://mm6j730pkj.codesandbox.io/'>
                Open Demo
                </a>

            <SecondHeader secondHeader="Setup"
                desc="Follow this basic directory structure for MaterializeCSS along with React"
            />
            <ThirdHeader thirdHeader="Project Structure" />
            <MarkupCode
                markupCode={
                    `public/\n|--index.html\nsrc/\n|--Images/\n\t|--Image1.jpg\n\t|--Image2.jpg\n|--Parallax.js\n|--index.js\n--package.json`
                }
            />
            <ThirdHeader thirdHeader="Options and Methods" />
            <p>For more info related to Options and Methods please check Materialize
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://materializecss.com/parallax.html'>
                    {` Parallax `}
                </a>docs</p>
            <SecondHeader
                secondHeader="CodeSandbox Demo"
                desc="Play on this working Demo of Parallax to get familiar with Reactize"
            />
            <a
                className="btn waves-effect waves-light purple darken-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codesandbox.io/s/mm6j730pkj?fontsize=14">
                Edit on CodeSandbox<i className="material-icons right">edit</i>
            </a>
            <Navigation align='right' link={`${match.url}/ref_and_the_dom`} where='Next' />
        </div>
    );
}

export default Parallax;
