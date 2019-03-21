import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import Image1 from '../../Images/KZg6-architecture-art-buildings-548094.jpg';
import Image2 from '../../Images/9TFw-architecture-automobile-buildings-950223.jpg';
import Image3 from '../../Images/eP-G-architecture-bridge-city-161853.jpg';
import Image4 from '../../Images/3jvM-beach-clouds-dream-60217.jpg';
import './Slider.css';

class SliderDemo extends Component {
    componentDidMount() {
        const options = {
            indicators: true,
            height: 500,
            interval: 4000,
            duration: 500
        };
        M.Slider.init(this.Slider, options);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Our slider is a simple and elegant image carousel. 
                    You can also have captions that will be transitioned on their own depending on their alignment. 
                    You can also have indicators that show up on the bottom of the slider.`}
                    />
                </div>

                <div
                    ref={Slider => {
                        this.Slider = Slider;
                    }}
                    className="slider col s12"
                >
                    <ul className="slides">
                        <li>
                            <img src={Image1} alt="1" />
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Here's our small slogan.
                                </h5>
                            </div>
                        </li>
                        <li>
                            <img src={Image2} alt="2" />
                            <div className="caption left-align">
                                <h3>Left Aligned Caption</h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Here's our small slogan.
                                </h5>
                            </div>
                        </li>
                        <li>
                            <img src={Image3} alt="3" />
                            <div className="caption right-align">
                                <h3>Right Aligned Caption</h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Here's our small slogan.
                                </h5>
                            </div>
                        </li>
                        <li>
                            <img src={Image4} alt="4" />
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Here's our small slogan.
                                </h5>
                            </div>
                        </li>
                    </ul>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Images/\n\t|--Image1.jpg\n\t|--Image2.jpg\n|--Slider.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/media.html'>
                        {` Slider `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo Slider to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/7348rjzn26?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}


export default SliderDemo;
