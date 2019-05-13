import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BashCode = ({ bashCode }) => {
    return (
        <div className="row">
            <div className="col s12 m9">
                <SyntaxHighlighter language='bash' style={prism}>{bashCode}</SyntaxHighlighter>
            </div>
        </div>
    );

};

export default BashCode;