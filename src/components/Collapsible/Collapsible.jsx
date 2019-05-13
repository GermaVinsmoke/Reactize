import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Aside from '../Aside';
import Content from './Content';
import CollapsibleDemo from './CollapsibleDemo';
import './Collapsible.css';

const Collapsible = ({ match }) => {
    return (
        <div className="spacingLeft">
            <header>
                <Header headerText="Collapsible" />
            </header>
            <main className="col s12 m9">
                <div className="row">
                    <div className="col s12 m9">
                        <Route exact path={`${match.url}`} component={CollapsibleDemo} />
                        <Route path={`${match.url}/:id`} component={Content} />
                    </div>
                    <div className="col s12 m3 hide-on-med-and-down">
                        <Aside data={['Ref and the DOM', 'Preselected Selection', 'Accordion', 'Expandable', 'Popout']} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Collapsible;