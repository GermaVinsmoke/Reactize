import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AsideStyle.css'

const Aside = ({ data, match, location }) => {
    let link;

    const asideLinks = data.map((item, i) => {
        link = item.toLowerCase().split(' ').join('_')
        return (
            <li key={i}>
                {location.pathname === match.url + '/' + link ?
                    <Link className="active" to={`${match.url}/${link}`}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                    :
                    <Link to={`${match.url}/${link}`}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>}
            </li>
        )
    })
    return (
        <ul className="section table-of-contents">
            {asideLinks}
        </ul>
    );
};

export default withRouter(Aside);