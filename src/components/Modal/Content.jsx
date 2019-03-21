import React from 'react';
import { withRouter } from 'react-router-dom';
import RefAndDOM from './RefAndDOM';
import FixedFooter from './FixedFooter';
import BottomSheet from './BottomSheet';

const Content = ({ match }) => {
    switch (match.params.id) {
        case 'ref_and_the_dom':
            return <RefAndDOM next='fixed_footer_modal' />
        case 'fixed_footer_modal':
            return <FixedFooter next='bottom_sheet_modal' prev='ref_and_the_dom' />
        case 'bottom_sheet_modal':
            return <BottomSheet prev='fixed_footer_modal' />
        default:
            return ''
    }
}

export default withRouter(Content);