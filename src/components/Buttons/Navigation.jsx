import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ link, where, align }) => {
    return (
        <div>
            {align === 'left' ?
                <Link style={{ marginLeft: '5%' }} className={`btn waves-effect waves-light purple darken-4 ${align}`} to={link}>{where}</Link> :
                <Link style={{ marginRight: '5%' }} className={`btn waves-effect waves-light purple darken-4 ${align}`} to={link}>{where}</Link>}
        </div>

    );
}

export default Navigation;