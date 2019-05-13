import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import { timeChanged } from './timepickerAction';
import { connect } from 'react-redux';
import './Timepicker.css';

class Timepicker extends Component {
    componentDidMount() {
        let context = this;
        const timePickerOptions = {
            duration: 350,
            defaultTime: "now",
            vibrate: true,
            twelveHour: false,
            onSelect(hour, minute) {
                context.props.timeChanged(hour, minute);
            }
        };
        M.Timepicker.init(this.Timepicker, timePickerOptions);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Description desc={`The timepicker allows users to select a date from an interactive clock..`}
                    />
                </div>

                <div className="row">
                    <div className="col s12 m12">
                        <label>Timepicker</label>
                        <input
                            ref={Timepicker => {
                                this.Timepicker = Timepicker;
                            }}
                            type="text"
                            className="timepicker"
                        />
                    </div>
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--actions/\n\t|--timepicker.js\n\t|--types.js\n|--reducers/\n\t|--index.js\n\t|--red.js\n|--Timepicker.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/pickers.html'>
                        {` Timepicker `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Timepicker to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/pyk8k6zlj?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hour: state.time.hour,
    minute: state.time.minute
});

export default connect(mapStateToProps, { timeChanged })(Timepicker);
