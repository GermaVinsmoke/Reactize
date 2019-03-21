import React from 'react';

const Description = ({ desc }) => {
    const { descriptionText } = styles;
    return <p className="flow-text col s12 m12" style={descriptionText}>{desc}</p>;
};

const styles = {
    descriptionText: {
        fontSize: 16
    }
}

export default Description;