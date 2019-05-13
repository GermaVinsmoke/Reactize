import React from 'react';
import Navigation from '../Buttons/Navigation';
import SecondHeader from '../Headings/SecondHeader';
import ThirdHeader from '../Headings/ThirdHeader';
import JsxCode from '../code/JsxCode';

const RefAndDOM = ({ next }) => {
    return (
        <div>
            <SecondHeader secondHeader="Ref and the DOM "
                desc={`Refs provide a way to access DOM nodes or React elements created in the render method. 
                Ref can be used for integration with third pary DOM libraries.  
                `}
            />
            <JsxCode jsxCode={
                `<div
    ref={Scrollspy => {
        this.Scrollspy = Scrollspy;
    }}
    className="scrollspy">
</div>`
            } />

            <ThirdHeader thirdHeader="index.js" />
            <JsxCode jsxCode={`import React from "react";
import ReactDOM from "react-dom";
import Scrollspy from "./Scrollspy";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Scrollspy React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Scrollspy />
    </div>
  );
}

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
`} />

            <ThirdHeader thirdHeader="Scrollspy.js" />
            <JsxCode jsxCode={`import React, { Component } from "react";
import M from "materialize-css";

class Scrollspy extends Component {
  componentDidMount() {
    const options = {
      top: 206
    };
    M.ScrollSpy.init(this.ScrollSpy1);
    M.ScrollSpy.init(this.ScrollSpy2);
    M.ScrollSpy.init(this.ScrollSpy3);
    M.Pushpin.init(this.PushPin, options);
  }
  render() {
    return (
      <div class="row">
        <div class="col s12 m9 l10">
          <div>
            <h3
              id="introduction"
              ref={ScrollSpy => {
                this.ScrollSpy1 = ScrollSpy;
              }}
              className="section scrollspy"
              className="purple-text darken-2"
            />
            <p>Introduction </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
          </div>

          <div
            ref={ScrollSpy => {
              this.ScrollSpy1 = ScrollSpy;
            }}
            id="structure"
            class="section scrollspy"
          >
            <p>Structure </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
          </div>

          <div
            ref={ScrollSpy => {
              this.ScrollSpy1 = ScrollSpy;
            }}
            id="initialization"
            class="section scrollspy"
          >
            <p>initialization </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,{" "}
            </p>
          </div>
        </div>
        <div class="col hide-on-small-only m3 l2">
          <div
            ref={PushPin => {
              this.PushPin = PushPin;
            }}
            className="pushpin pin-top"
          >
            <ul class="section table-of-contents">
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#structure">Structure</a>
              </li>
              <li>
                <a href="#initialization">Intialization</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Scrollspy;
`} />

            <Navigation align="left" link={`/scrollspy`} where='Prev' />
        </div>
    )
}

export default RefAndDOM;