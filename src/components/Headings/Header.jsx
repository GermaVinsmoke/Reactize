import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./HeaderStyle.css";
import { withRouter, Link } from 'react-router-dom';

const Header = ({ headerText, match }) => {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <h1><Link className="purple-text text-darken-4" to={match.url}>{headerText}</Link></h1>
                </div>
            </div>
            <div className="divider purple darken-4" />
        </div>
    );
};

export default withRouter(Header);
