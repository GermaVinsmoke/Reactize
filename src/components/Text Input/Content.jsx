import React from 'react';
import { withRouter } from 'react-router-dom';
import RefAndDOM from './RefAndDOM';
import Store from './Store';
import ActionReducer from './ActionReducer';

const Content = ({ match }) => {
    switch (match.params.id) {
        case 'counter':
            return <RefAndDOM next='setting_up_redux_store' />
        case 'setting_up_redux_store':
            return <Store next='action_and_reducer' prev='counter' />
        case 'action_and_reducer':
            return <ActionReducer prev='setting_up_redux_store' />
        default:
            return ''
    }
}

export default withRouter(Content);