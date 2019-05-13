const TIME_CHANGED = 'time_changed';

export const timeChanged = (hour, minute) => ({
    type: TIME_CHANGED,
    hour,
    minute
});
