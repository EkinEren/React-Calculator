import React from "react";
import '../styles/Display.css';

class CalcDisplay extends React.Component {

    render() {
        return (

            <div className="Display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

CalcDisplay.defaultProps = {
    value: '0'
};

export default CalcDisplay;