import React from 'react';
import { withRouter } from 'react-router-dom';
import RefAndDOM from './RefAndDOM';

const Content = ({ match }) => {
    switch (match.params.id) {
        case 'ref_and_the_dom':
            return <RefAndDOM />
        default:
            return ''
    }
}

export default withRouter(Content);