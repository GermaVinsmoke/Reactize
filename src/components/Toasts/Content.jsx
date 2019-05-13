import React from 'react';
import { withRouter } from 'react-router-dom';
import RefAndDOM from './RefAndDOM';

const Content = ({ match }) => {
    switch (match.params.id) {
        case 'programatically':
            return <RefAndDOM />
        default:
            return ''
    }
}

export default withRouter(Content);