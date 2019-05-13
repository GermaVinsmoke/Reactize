import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import JsxCode from '../code/JsxCode';
import CarouselSpecialDemo from './CarouselSpecialDemo';
import ThirdHeader from '../Headings/ThirdHeader';


const CarouselSpecial = ({ prev }) => {
    return (
        <div>
            <SecondHeader secondHeader="Carousel Special" />
            <CarouselSpecialDemo />
            <ThirdHeader thirdHeader="CarouselSpecial.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class CarouselSpecial extends Component {
    componentDidMount() {
    const options = {
        fullWidth: true,
        indicators: true
    };
    M.Carousel.init(this.Carousel, options);
    }

    render() {
        return (
            <div
            ref={Carousel => {
                this.Carousel = Carousel;
            }}
            className="carousel carousel-slider center"
            >
            <div className="carousel-fixed-item center">
                <a className="btn waves-effect white grey-text darken-text-2">
                button
                </a>
            </div>
            <div className="carousel-item red white-text" href="#one!">
                <h2>First Panel</h2>
                <p className="white-text">This is your first panel</p>
            </div>
            <div className="carousel-item amber white-text" href="#two!">
                <h2>Second Panel</h2>
                <p className="white-text">This is your second panel</p>
            </div>
            <div className="carousel-item green white-text" href="#three!">
                <h2>Third Panel</h2>
                <p className="white-text">This is your third panel</p>
            </div>
            <div className="carousel-item blue white-text" href="#four!">
                <h2>Fourth Panel</h2>
                <p className="white-text">This is your fourth panel</p>
            </div>
            </div>
        );
    }
}

export default CarouselSpecial;`} />
            <Navigation align="left" link={`/carousel/${prev}`} where='Prev' />
        </div>
    );
}

export default CarouselSpecial;