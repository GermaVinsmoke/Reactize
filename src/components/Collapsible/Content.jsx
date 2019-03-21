import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RefAndDOM from './RefAndDOM';
import PreselectedSelection from './PreselectedSelection';
import Accordion from './Accordion';
import Expandable from './Expandable';
import Popout from './Popout';

const Content = ({ match }) => {
    switch (match.params.id) {
        case 'ref_and_the_dom':
            return <RefAndDOM next='preselected_selection' />
        case 'preselected_selection':
            return <PreselectedSelection next='accordion' prev='ref_and_the_dom' />
        case 'accordion':
            return <Accordion next='expandable' prev='preselected_selection' />
        case 'expandable':
            return <Expandable next='popout' prev='accordion' />
        case 'popout':
            return <Popout prev='expandable' />
        default:
            return ''
    }
}

export default withRouter(Content);