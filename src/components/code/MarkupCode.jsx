import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkupCode = ({ markupCode }) => {

    return (
        <div className="row">
            <div className="col s12 m12">
                <SyntaxHighlighter language='markup' style={prism}>{markupCode}</SyntaxHighlighter>
            </div>
        </div>
    );
};

export default MarkupCode;