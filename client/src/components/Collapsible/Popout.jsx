import React, { Component } from "react";
import M from "materialize-css";
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';
import Navigation from '../Buttons/Navigation';

class Popout extends Component {
    componentDidMount() {
        const options = {
            inDuration: 300,
            outDuration: 200
        }
        M.Collapsible.init(this.Collapsible, options);
    }
    render() {
        return (
            <div>
                <SecondHeader secondHeader="Popout" />
                <ul
                    ref={Collapsible => {
                        this.Collapsible = Collapsible;
                    }}
                    className="collapsible popout"
                >
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">filter_drama</i>First
                        </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li className="active">
                        <div className="collapsible-header">
                            <i className="material-icons">place</i>Second
                        </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">whatshot</i>Third
                        </div>
                        <div className="collapsible-body">
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </li>
                </ul>
                <ThirdHeader thirdHeader="Collapsible.js" />
                <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Collapsible extends Component {
  componentDidMount() {
    const options1 = {
      onOpenStart: () => {
        console.log("onOpenStart");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd");
      },
      onCloseStart: () => {
        console.log("onCloseStart");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd");
      },
      inDuration: 300,
      outDuration: 200
    };
    M.Collapsible.init(this.Collapsible1, options1);
  }

  render() {
      const { headingText, subHeading } = styles;
      return (
        <div className="container">
            <div className="row">
            <ul
            ref={Collapsible => {
              this.Collapsible1 = Collapsible;
            }}
            className="collapsible popout"
          >
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">place</i>Second
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>Third
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
    </div>
    );
  }
}

const styles = {
  headingText: {
    fontSize: 30,
    fontWeight: 300
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 300
  }
};

export default Collapsible;        `} />
                <Navigation align="left" link={`/collapsible/${this.props.prev}`} where='Prev' />
            </div >
        );
    }
}

export default Popout;