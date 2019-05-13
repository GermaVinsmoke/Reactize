const TEXT_CHANGED = 'text_changed';
const TEXT_AREA_CHANGED = 'text_area_changed';

const initial_state = {
    text: "",
    textArea: ""
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
            return { ...state, text: action.text };
        case TEXT_AREA_CHANGED:
            return { ...state, textArea: action.textArea };
        default:
            return { ...state };
    }
};
