import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JsxCode = ({ jsxCode }) => {

    return (
        <div className="row">
            <div className="col s12 m12">
                <SyntaxHighlighter language='jsx' style={prism}>{jsxCode}</SyntaxHighlighter>
            </div>
        </div>
    );
};

export default JsxCode;