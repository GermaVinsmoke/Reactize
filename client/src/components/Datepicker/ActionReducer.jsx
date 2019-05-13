import React from 'react';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';
import Description from '../Headings/Description';
import Navigation from '../Buttons/Navigation';

const ActionReducer = ({ prev }) => {
    return (
        <div>
            <SecondHeader secondHeader="Action"
            desc="Actions are payloads of information that send data from your application to your store. 
            They are the only source of information for the store. " />

            <ThirdHeader thirdHeader="action.js" />
            <JsxCode jsxCode={`import { DATE_CHANGED } from "./types";

export const dateChanged = date => ({
  type: DATE_CHANGED,
  date
});`} />
            <Description desc="Retrieve the date field value every
            time there's some change in that field and call the action.
            DATE_CHANGED is used as a variable in order to debug the errors." />

            <SecondHeader secondHeader="Reducer" 
            desc="Reducers specify how the application's state changes in response to actions sent to the store."
            />
            
            <ThirdHeader thirdHeader="reducer.js" />
            <JsxCode jsxCode={`import { DATE_CHANGED } from "../actions/types";

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
};`} />
            <Description desc="Action is having a type property which can be used to call a reducer. A
            reducer returns the new state alongwith the changes produced by the action." />

            <Navigation align='left' link={`/datepicker/${prev}`} where='Prev' />
        </div>
    );
}

export default ActionReducer;