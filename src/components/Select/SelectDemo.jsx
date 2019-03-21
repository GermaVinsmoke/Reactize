import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import { selectChanged } from './selectAction';
import { connect } from 'react-redux';
import './Select.css';

class SelectDemo extends Component {
    componentDidMount() {
        M.FormSelect.init(this.FormSelect);
    }
    handleChange = event => {
        this.props.selectChanged(event.target.value);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`Select allows user input through specified options.`}
                    />
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <select
                            ref={FormSelect => {
                                this.FormSelect = FormSelect;
                            }}
                            onChange={this.handleChange}
                        >
                            <option value="0" disabled defaultValue>
                                Choose your option
                            </option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--actions/\n\t|--select.js\n\t|--types.js\n|reducers/\n\t|--index.js\n\t|--red.js\n|--Select.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/select.html'>
                        {` Select `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Autocomplete to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/32pmrlk7l1">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.select.selectValue
});

export default connect(mapStateToProps, { selectChanged })(SelectDemo);
