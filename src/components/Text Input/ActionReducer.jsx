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
            <JsxCode jsxCode={`const TEXT_CHANGED = 'text_changed';
const TEXT_AREA_CHANGED = 'text_area_changed';

export const textChanged = text => ({
    type: TEXT_CHANGED,
    text
});

export const textAreaChanged = textArea => ({
    type: TEXT_AREA_CHANGED,
    textArea
});`} />
            <Description desc="Retrieve the text input field value every
            time there's some change in that field and call the action.
            TEXT_CHANGED and TEXT_AREA_CHANGED are used as a variable in order to debug the errors." />

            <SecondHeader secondHeader="Reducer" 
            desc="Reducers specify how the application's state changes in response to actions sent to the store."
            />
            
            <ThirdHeader thirdHeader="reducer.js" />
            <JsxCode jsxCode={`const TEXT_CHANGED = 'text_changed';
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
};`} />
            <Description desc="Action is having a type property which can be used to call a reducer. A
            reducer returns the new state alongwith the changes produced by the action." />

            <Navigation align='left' link={`/text_input/${prev}`} where='Prev' />
        </div>
    );
}

export default ActionReducer;