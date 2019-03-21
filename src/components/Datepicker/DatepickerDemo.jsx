import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import { dateChanged } from './datepickerAction';
import { connect } from 'react-redux';
import './Datepicker.css';

class DatepickerDemo extends Component {
    componentDidMount() {
        let context = this;
        const datePickerOptions = {
            autoClose: true,
            // minDate: new Date(2018, 11, 3)
            // defaultDate: new Date(2018, 1, 3),
            // setDefaultDate: true
            onSelect(date) {
                console.log(date);
                context.props.dateChanged(date);
                console.log(context.props.date);
            }
        };
        M.Datepicker.init(this.Datepicker, datePickerOptions);

        // let instance = M.Datepicker.getInstance(this.Datepicker);
        // instance.setDate(new Date(2018, 2, 3));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`The datepicker allows users to select a date from an interactive calendar.`}
                    />
                </div>

                <div className="row">
                    <div className="col s12 m12">
                        <label>Datepicker</label>
                        <input
                            ref={DatePicker => {
                                this.Datepicker = DatePicker;
                            }}
                            id="date-picker"
                            type="text"
                            className="datepicker"
                        />
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--actions/\n\t|--datepicker.js\n\t|--types.js\n|--reducers/\n\t|--index.js\n\t|--red.js\n|--Datepicker.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/pickers.html'>
                        {` Datepicker `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Datepicker to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/8lq33j9zyj?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    date: state.date.date
});

export default connect(mapStateToProps, { dateChanged })(DatepickerDemo);
