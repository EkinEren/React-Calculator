import React from "react";
import '../styles/Display.css';

class Display extends React.Component {

    render() {

        return (
            <div className="Display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default Display;