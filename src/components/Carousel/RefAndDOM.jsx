import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';

const RefAndDOM = ({ next }) => {
    return (
        <div>
            <SecondHeader secondHeader="Ref and the DOM "
                desc={`Refs provide a way to access DOM nodes or React elements created in the render method. 
                Ref can be used for integration with third pary DOM libraries.  
                `}
            />
            <JsxCode jsxCode={
                `<div
    ref={Carousel => {
        this.Carousel = Carousel;
    }}
    className="carousel">
</div>`
            } />

            <ThirdHeader thirdHeader="index.js" />
            <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";

function App() {
    const { headingText } = styles;

    return (
    <div className="container">
        <h2 style={headingText} className="flow-text">
        Carousel React Demo
        </h2>
        <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
        </p>
        <Carousel />
    </div>
    );
}

const styles = {
    headingText: {
    fontSize: 50,
    fontWeight: 300
    }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);`} />

            <ThirdHeader thirdHeader="Carousel.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import one from "../public/1.jpg";
import two from "../public/2.jpg";
import three from "../public/3.jpg";
import four from "../public/4.jpg";
import five from "../public/5.jpg";

class Carousel extends Component {
    componentDidMount() {
    const options = {
        duration: 300,
        onCycleTo: () => {
        console.log("New Slide");
        }
    };
    M.Carousel.init(this.Carousel, options);
    }

    render() {
        return (
            <div
            ref={Carousel => {
                this.Carousel = Carousel;
            }}
            className="carousel"
            >
            <a className="carousel-item">
                <img alt="1" src={one} />
            </a>
            <a className="carousel-item">
                <img alt="2" src={two} />
            </a>
            <a className="carousel-item">
                <img alt="3" src={three} />
            </a>
            <a className="carousel-item">
                <img alt="4" src={four} />
            </a>
            <a className="carousel-item">
                <img alt="5" src={five} />
            </a>
            </div>
        );
    }
}

export default Carousel;`} />

            <Navigation align="left" link={`/carousel`} where='Prev' />
            <Navigation align="right" link={`/carousel/${next}`} where='Next' />
        </div>
    )
}

export default RefAndDOM;