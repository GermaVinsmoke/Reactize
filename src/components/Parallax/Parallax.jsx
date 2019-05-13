import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Aside from '../Aside';
import Content from './Content';
import ParallaxDemo from './ParallaxDemo';
import './Parallax.css';

class Parallax extends Component {
    render() {
        return (
            <div className="spacingLeft">
                <header>
                    <Header headerText="Parallax" />
                </header>
                <main className="col s12 m9">
                    <div className="row">
                        <div className="col s12 m9">
                            <Route exact path={`${this.props.match.url}`} component={ParallaxDemo} />
                            <Route path={`${this.props.match.url}/:id`} component={Content} />
                        </div>
                        <div className="col s12 m3 hide-on-med-and-down">
                            <Aside data={['Ref and the DOM']} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}


export default Parallax;