import React from "react";
import '../styles/Display.css';
import { Input } from 'antd';

class Display extends React.Component {

    render() {

        return (
            <div className="Display">
                <Input className="Display" type="text" readOnly value={this.props.value}></Input>
            </div>
        );
    }
}

export default Display;