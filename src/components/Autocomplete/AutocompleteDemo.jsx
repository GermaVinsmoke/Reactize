import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import { autoCompleteChanged } from './autoCompleteAction';
import { connect } from 'react-redux';
import './Autocomplete.css';

class AutocompleteDemo extends Component {
    componentDidMount() {
        const options = {
            //Data object for autocomplete
            data: {
                Apple: null,
                Acer: null,
                Alcatel: null,
                Asus: null,
                Huawei: null,
                HTC: null,
                Karbonn: null,
                Lenovo: null,
                Lava: null,
                LG: null,
                Microsoft: null,
                Meizu: null,
                Nokia: null,
                Oppo: null,
                OnePlus: null,
                Sony: null,
                Vivo: null,
                Yu: null,
                Google: "https://placehold.it/250x250"
            },

            //Limit of results autocomplete shows
            limit: 5,

            //Callback function for Autocomplete
            onAutocomplete() {
                console.log("Completed");
                let input = document.getElementById("autocomplete-input");
                console.log(input.value);
            },

            //Minimum number of characters before autocomplete starts.
            minLength: 1
        };
        M.Autocomplete.init(this.Autocomplete, options);
    }

    onAutoCompleteChange = event => {
        this.props.autoCompleteChanged(event.target.value);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Add an autocomplete dropdown below your input to suggest possible values in your form. 
                    You can populate the list of autocomplete options dynamically as well.`}
                    />
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">textsms</i>
                        <input
                            ref={Autocomplete => {
                                this.Autocomplete = Autocomplete;
                            }}
                            type="text"
                            id="autocomplete-input"
                            className="autocomplete"
                            onChange={this.onAutoCompleteChange}
                            value={this.props.autoCompleteValue}
                        />
                        <label htmlFor="autocomplete-input">Autocomplete</label>
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--actions/\n\t|--autoComplete.js\n\t|--types.js\n|--reducers/\n\t|--index.js\n\t|--red.js\n|--Autocomplete.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/autocomplete.html'>
                        {` Autocomplete `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Autocomplete to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/p73z66zl47?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    autoCompleteValue: state.autocomplete.autoCompleteValue
});

export default connect(mapStateToProps, { autoCompleteChanged })(AutocompleteDemo);
