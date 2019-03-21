const TEXT_CHANGED = 'text_changed';
const TEXT_AREA_CHANGED = 'text_area_changed';

export const textChanged = text => ({
    type: TEXT_CHANGED,
    text
});

export const textAreaChanged = textArea => ({
    type: TEXT_AREA_CHANGED,
    textArea
});
