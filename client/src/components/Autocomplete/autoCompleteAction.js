const AUTOCOMPLETE_CHANGED = 'autocomplete_changed';

export const autoCompleteChanged = autoCompleteValue => ({
    type: AUTOCOMPLETE_CHANGED,
    autoCompleteValue
});
