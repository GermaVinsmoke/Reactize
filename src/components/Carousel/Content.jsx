import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RefAndDOM from './RefAndDOM';
import CarouselSpecial from './CarouselSpecial';

const Content = ({ match }) => {
    switch (match.params.id) {
        case 'ref_and_the_dom':
            return <RefAndDOM next='carousel_special' />
        case 'carousel_special':
            return <CarouselSpecial prev='ref_and_the_dom' />
        default:
            return ''
    }
}

export default withRouter(Content);