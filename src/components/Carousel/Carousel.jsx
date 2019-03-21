import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Aside from '../Aside';
import './Carousel.css';
import '../AsideStyle.css';
import Content from './Content';
import CarouselDemo from './CarouselDemo';

const Carousel = ({ match }) => {
    return (
        <div className="spacingLeft">
            <header>
                <Header headerText="Carousel" />
            </header>
            <main className="col s12 m9">
                <div className="row">
                    <div className="col s12 m9">
                        <Route exact path={`${match.url}`} component={CarouselDemo} />
                        <Route path={`${match.url}/:id`} component={Content} />
                    </div>
                    <div className="col s12 m3 hide-on-med-and-down">
                        <Aside data={['Ref and the DOM', 'Carousel Special']} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Carousel;