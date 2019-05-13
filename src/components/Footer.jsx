import React from 'react';
import ThirdHeader from './Headings/ThirdHeader';

const Footer = () => {
    return (
        <footer>
            <div className="divider purple darken-4" />
            <div className="row">
                <div className="col s12 m6 center">
                    <ThirdHeader thirdHeader="Help Materialize Grow"
                    desc='We hope you have enjoyed using Materialize and if you feel like it has helped you out and want 
                    to support the team you can help us by donating or backing us on Patreon. 
                    Any amount would help support and continue development on this project and is greatly appreciated.' />
                    <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://materializecss.com/support-us.html"
                    >Support Us</a>
                </div>
                <div className="col s12 m6 center">
                    <ThirdHeader thirdHeader="Help Reactize Grow"
                    desc="Help in supporting Reactize by contributing towards it. Produce all the Materialize CSS 
                    components in React." />
                    <a
                    className="btn waves-effect waves-light purple darken-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/GermaVinsmoke/Reactize"
                    >Support Us</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;