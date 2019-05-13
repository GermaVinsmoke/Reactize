const SELECT_CHANGED = 'select_changed';

const initial_state = {
    selectValue: ""
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case SELECT_CHANGED:
            return { ...state, selectValue: action.selectValue };
        default:
            return { ...state };
    }
};
