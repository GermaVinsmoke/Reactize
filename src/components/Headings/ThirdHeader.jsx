import React from 'react';
import Description from './Description';

const ThirdHeader = ({ thirdHeader, desc }) => {

    return (
        <div className="row">
            <div className="col s12">
                <h5>{thirdHeader}</h5>
                {desc && <Description desc={desc} />}
            </div>
        </div>
    );
};

export default ThirdHeader;