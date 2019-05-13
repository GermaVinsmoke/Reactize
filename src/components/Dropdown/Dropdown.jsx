import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Aside from '../Aside';
import Content from './Content';
import DropdownDemo from './DropdownDemo';
import './Dropdown.css';

const Dropdown = ({ match }) => {
    return (
        <div className="spacingLeft">
            <header>
                <Header headerText="Dropdown" />
            </header>
            <main className="col s12 m9">
                <div className="row">
                    <div className="col s12 m9">
                        <Route exact path={`${match.url}`} component={DropdownDemo} />
                        <Route path={`${match.url}/:id`} component={Content} />
                    </div>
                    <div className="col s12 m3 hide-on-med-and-down">
                        <Aside data={['Ref and the DOM']} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dropdown;