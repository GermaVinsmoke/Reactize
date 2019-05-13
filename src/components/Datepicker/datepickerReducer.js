const DATE_CHANGED = 'date_changed';

const initial_state = {
    date: ""
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case DATE_CHANGED:
            return { ...state, date: action.date };
        default:
            return { ...state };
    }
};
