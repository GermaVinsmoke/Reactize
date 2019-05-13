import React, { Component } from 'react';
import Description from "./Description";

class SecondHeader extends Component {

    render() {
        const { secondHeader, desc } = this.props;
        const { headingText } = styles;

        return (
            <div>
                <div className="row">
                    <div className="col s12 m12">
                        <h3
                            className="section purple-text text-darken-4"
                            style={headingText}>
                            {secondHeader}
                        </h3>
                        {desc && <Description desc={desc} />}
                    </div>
                </div>
            </div>
        );
    }
};

const styles = {
    headingText: {
        fontWeight: 300
    }
}

export default SecondHeader;