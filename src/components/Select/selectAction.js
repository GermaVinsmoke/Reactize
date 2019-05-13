const SELECT_CHANGED = 'select_changed';

export const selectChanged = selectValue => ({
    type: SELECT_CHANGED,
    selectValue
});
