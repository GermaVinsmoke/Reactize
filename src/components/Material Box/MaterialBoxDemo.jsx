import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import image from '../../Images/aBfk-sample-1.jpg';
import './MaterialBox.css';

class MaterialBoxDemo extends Component {
    componentDidMount() {
        M.Materialbox.init(this.Materialbox);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Material box is a material design implementation of the Lightbox plugin. 
                    When a user clicks on an image that can be enlarged, Material box centers the image and enlarges it in a smooth, non-jarring manner. 
                    To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.`}
                    />
                </div>

                <img
                    ref={Materialbox => {
                        this.Materialbox = Materialbox;
                    }}
                    className="materialboxed col s12 m9"
                    alt="1"
                    width="650"
                    src={image}
                    data-caption="Sample Image"
                />

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--MaterialBox.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/media.html'>
                        {` Material Box `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Carousel to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/p7kwn4p1r0?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}


export default MaterialBoxDemo;
