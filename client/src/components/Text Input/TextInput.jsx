import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Aside from '../Aside';
import Content from './Content';
import TextInputDemo from './TextInputDemo';
import './TextInput.css';

const TextInput = ({ match }) => {
    return (
        <div className="spacingLeft">
            <header>
                <Header headerText="TextInput" />
            </header>
            <main className="col s12 m9">
                <div className="row">
                    <div className="col s12 m9">
                        <Route exact path={`${match.url}`} component={TextInputDemo} />
                        <Route path={`${match.url}/:id`} component={Content} />
                    </div>
                    <div className="col s12 m3 hide-on-med-and-down">
                        <Aside data={['Counter', 'Setting up Redux Store',
                            'Action and Reducer']} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TextInput;