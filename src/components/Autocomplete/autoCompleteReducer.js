const AUTOCOMPLETE_CHANGED = 'autocomplete_changed';

const initial_state = {
    autoCompleteValue: ""
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case AUTOCOMPLETE_CHANGED:
            return { ...state, autoCompleteValue: action.autoCompleteValue };
        default:
            return { ...state };
    }
};