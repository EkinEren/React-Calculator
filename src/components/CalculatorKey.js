import React from "react";
import { Button } from "antd";
import '../styles/Button.css'

//calculator button

class CalculatorKey extends React.Component {

    render() {
        return (
            <div className="Button">
                <Button className="Button" size="large" onClick={this.props.onClick} value={this.props.value} block>{this.props.name}</Button>
            </div>
        )
    }
}

export default CalculatorKey;