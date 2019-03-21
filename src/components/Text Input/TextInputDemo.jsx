import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import { textChanged, textAreaChanged } from './textInputAction';
import { connect } from 'react-redux';
import './TextInput.css';

class TextInputDemo extends Component {
    componentDidMount() {
        let input = document.getElementById("input_text");

        let input2 = document.getElementById("textarea2");
        M.CharacterCounter.init(input);
        M.CharacterCounter.init(input2);
        //Auto Resize
        M.textareaAutoResize(input2);
    }

    onTextChange = event => {
        this.props.textChanged(event.target.value);
    };

    onTextAreaChange = event => {
        this.props.textAreaChanged(event.target.value);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Forms are the standard way to receive user inputted data. 
                    The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.`}
                    />
                </div>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="input_text"
                                    type="text"
                                    maxLength="10"
                                    onChange={this.onTextChange}
                                    value={this.props.text}
                                />
                                <label htmlFor="input_text">Input text</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="textarea2"
                                    className="materialize-textarea"
                                    data-length="120"
                                    onChange={this.onTextAreaChange}
                                    value={this.props.textArea}
                                />
                                <label htmlFor="textarea2">Textarea</label>
                            </div>
                        </div>
                    </form>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--actions/\n\t|--textInput.js\n\t|--types.js\n|reducers/\n\t|--index.js\n\t|--red.js\n|--TextInput.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/text-inputs.html'>
                        {` Text Inputs `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Text Input to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/rlv58jor04?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/counter`} where='Next' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.textinput.text,
    textArea: state.textinput.textArea
});

export default connect(mapStateToProps, { textChanged, textAreaChanged })(TextInputDemo);
