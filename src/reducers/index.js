import { combineReducers } from "redux";
import autocomplete from '../components/Autocomplete/autoCompleteReducer';
import textinput from '../components/Text Input/textInputReducer';
import select from '../components/Select/selectReducer';
import date from '../components/Datepicker/datepickerReducer';
import time from '../components/Timepicker/timepickerReducer'

export default combineReducers({
    autocomplete,
    textinput,
    select,
    date,
    time
})