import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from "../Headings/SecondHeader";
import ThirdHeader from "../Headings/ThirdHeader";
import Description from "../Headings/Description";
import MarkupCode from '../code/MarkupCode';
import Navigation from '../Buttons/Navigation';
import image1 from '../../Images/vBxq-parallax2.jpg';
import './Chips.css';

class ChipsDemo extends Component {
    componentDidMount() {
        const options1 = {
            data: [
                {
                    tag: "Orange"
                },
                {
                    tag: "Guavava"
                },
                {
                    tag: "Strawberry"
                }
            ]
        };
        const options2 = {
            placeholder: "Enter a tag",
            secondaryPlaceholder: "+Tag"
        };
        const options3 = {
            autocompleteOptions: {
                data: {
                    Apple: null,
                    Microsoft: null,
                    Google: null
                },
                limit: Infinity,
                minLength: 1
            }
        };
        M.Chips.init(this.Chips);
        M.Chips.init(this.Chips1, options1);
        M.Chips.init(this.Chips2, options2);
        M.Chips.init(this.Chips3, options3);

        let instance = M.Chips.getInstance(this.Chips);
        instance.addChip({
            tag: "Good"
        });
        instance.selectChip(0);
        // instance.deleteChip(0);
    }

    render() {
        const { labelText } = styles;
        return (
            <div>
                <div className="row">
                    <Description desc={`Chips can be used to represent small blocks of information. 
                    They are most commonly used either for contacts or for tags.`}
                    />
                </div>

                <div className="row col s12 m12">
                    <div className="chip">
                        <img src={image1} alt="Contact Person" />
                        Jane Doe
                    </div>
                    <div className="chip">
                        Tag
                        <i className="close material-icons">close</i>
                    </div>
                </div>
                <div className="row col s12 m12">
                    <label style={labelText}>Add tags</label>
                    <div
                        ref={Chips => {
                            this.Chips = Chips;
                        }}
                        className="chips"
                    />
                </div>
                <div className="row col s12 m12">
                    <label style={labelText}>Set initial tags</label>
                    <div
                        ref={Chips => {
                            this.Chips1 = Chips;
                        }}
                        className="chips chips-initial"
                    />
                </div>
                <div className="row col s12 m12">
                    <label style={labelText}>
                        Use placeholders and override hint texts
                    </label>
                    <div
                        ref={Chips => {
                            this.Chips2 = Chips;
                        }}
                        className="chips chips-placeholder"
                    />
                </div>
                <div className="row col s12 m12">
                    <label style={labelText}>Use autocomplete with chips</label>
                    <div
                        ref={Chips => {
                            this.Chips3 = Chips;
                        }}
                        className="chips chips-autocomplete"
                    />
                </div>

                <SecondHeader secondHeader="Setup"
                    desc="Follow this basic directory structure for MaterializeCSS along with React"
                />
                <ThirdHeader thirdHeader="Project Structure" />
                <MarkupCode
                    markupCode={
                        `public/\n|--index.html\nsrc/\n|--Chips.js\n|--index.js\n--package.json`
                    }
                />
                <ThirdHeader thirdHeader="Options and Methods" />
                <p>For more info related to Options and Methods please check Materialize
                <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://materializecss.com/chips.html'>
                        {` Chips `}
                    </a>docs</p>
                <SecondHeader
                    secondHeader="CodeSandbox Demo"
                    desc="Play on this working Demo of Chips to get familiar with Reactize"
                />
                <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codesandbox.io/s/8y098xr2zl?fontsize=14">
                    Edit on CodeSandbox<i className="material-icons right">edit</i>
                </a>
                <Navigation align='right' link={`${this.props.match.url}/ref_and_the_dom`} where='Next' />
            </div>
        );
    }
}

const styles = {
    labelText: {
        fontSize: 14
    }
};

export default ChipsDemo;
