const TIME_CHANGED = 'time_changed';

const initial_state = {
    hour: "",
    minute: ""
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case TIME_CHANGED:
            return { ...state, hour: action.hour, minute: action.minute };
        default:
            return { ...state };
    }
};
