import React from "react";
import { Button } from "antd";
import '../styles/Button.css';

class CalcButton extends React.Component {

    render() {

        return (
            <div>
                <Button className="Button">{this.props.name}</Button>
            </div>
        );
    }

}

export default CalcButton;

//turn to function rather than class.