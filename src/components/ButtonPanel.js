import React from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../styles/ButtonPanel.css'
import CalculatorKey from "./CalculatorKey";

const ButtonGroup = Button.Group;

class ButtonPanel extends React.Component {

    handleNumber = (e) => {
        this.props.onDigit(e.target.value);
    };

    render() {
        return (
            <div className="ButtonPanel">
                <ButtonGroup>
                    <CalculatorKey name="C" value="C" onClick={this.props.ClearAll}></CalculatorKey>
                    <CalculatorKey name="1" value={1} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="4" value={4} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="7" value={7} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="0" className="ButtonZero" value={0} onClick={this.handleNumber}></CalculatorKey>
                </ButtonGroup>
                <ButtonGroup>
                    <CalculatorKey name="+-" value="toggle" onClick={this.props.onSignChange}></CalculatorKey>
                    <CalculatorKey name="2" value={2} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="5" value={5} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="8" value={8} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="." onClick={this.props.onDecimal}></CalculatorKey>
                </ButtonGroup>
                <ButtonGroup>
                    <CalculatorKey name="%" onClick={this.props.onPercentage}></CalculatorKey>
                    <CalculatorKey name="3" value={3} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="6" value={6} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="9" value={9} onClick={this.handleNumber}></CalculatorKey>
                    <CalculatorKey name="lol"></CalculatorKey>
                </ButtonGroup>
                <ButtonGroup>
                    <CalculatorKey name="/" value="/" onClick={this.props.onOperation}></CalculatorKey>
                    <CalculatorKey name="+" value="+" onClick={this.props.onOperation}></CalculatorKey>
                    <CalculatorKey name="-" value="-" onClick={this.props.onOperation}></CalculatorKey>
                    <CalculatorKey name="*" value="*" onClick={this.props.onOperation}></CalculatorKey>
                    <CalculatorKey name="=" value="=" onClick={this.props.onOperation}></CalculatorKey>
                </ButtonGroup>
            </div>
        )
    }
}

export default ButtonPanel;