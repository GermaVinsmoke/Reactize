import React, { Component } from "react";
import M from "materialize-css";
import one from "../../Images/1.jpg";
import two from "../../Images/2.jpg";
import three from "../../Images/3.jpg";
import four from "../../Images/4.jpg";
import five from "../../Images/5.jpg";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from "../Buttons/Navigation";
import './Carousel.css';


class Carousel extends Component {
    componentDidMount() {
        const options = {
            duration: 300
        };
        M.Carousel.init(this.Carousel, options);
    }

    render() {
        return (
            <div>
                <Description desc={`Our Carousel is a robust and versatile component that can be an image slider, 
                to an item carousel, to an onboarding experience. It is touch enabled making it especially smooth to use on mobile.`}
                />
                <div
                    ref={Carousel => {
                        this.Carousel = Carousel;
                    }}
                    className="carousel"
                >
                    <a href="#!" className="carousel-item">
                        <img alt="1" src={one} />
                    </a>
                    <a href="#!" className="carousel-item">
                        <img alt="2" src={two} />
                    </a>
                    <a href="#!" className="carousel-item">
                        <img alt="3" src={three} />
                    </a>
                    <a href="#!" className="carousel-item">
                        <img alt="4" src={four} />
                    </a>
                    <a href="#!" className="carousel-item">
                        <img alt="5" src={five} />
                    </a>
                </div>
                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Images/\n\t|--Image1.jpg\n\t|--Image2.jpg\n|--Carousel.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/carousel.html'>
                        {` Carousel `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Carousel to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/00yqq5qnv0?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}

export default Carousel;
