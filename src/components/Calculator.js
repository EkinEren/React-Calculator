import React from "react";
import ButtonPanel from "./ButtonPanel";
import { CalculatorOperations } from "./operations";
import Display from "./Display";
import '../styles/Calculator.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null,
            displayValue: '0',
            operator: null,
            waitingForOperand: false
        }
    }

    inputDigit = (digit) => {
        const { displayValue, waitingForOperand } = this.state

        if (waitingForOperand) {
            this.setState({
                displayValue: String(digit),
                waitingForOperand: false
            })
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            })
        }
    }

    onOperation = (e) => {
        const { value, displayValue, operator } = this.state
        const inputValue = parseFloat(displayValue)

        if (value == null) {
            this.setState({
                value: inputValue
            })
        } else if (operator) {
            const currentValue = value || 0
            const newValue = CalculatorOperations[operator](currentValue, inputValue)

            this.setState({
                value: newValue,
                displayValue: String(newValue)
            })
        }

        this.setState({
            waitingForOperand: true,
            operator: e.target.value
        })
    }

    onClear = () => {

        this.setState({
            value: null,
            displayValue: '0',
            operator: null,
            waitingForOperand: false
        })

    }

    onSignChange = () => {

        const toggleSign = parseFloat(this.state.displayValue) * -1

        this.setState({
            displayValue: String(toggleSign)
        })
    }

    render() {
        return (
            <div className="Container">
                <div className="Center">
                    <Display value={this.state.displayValue} />
                    <ButtonPanel onDigit={this.inputDigit}
                        onOperation={this.onOperation}
                        ClearAll={this.onClear}
                        onSignChange={this.onSignChange}
                    />
                </div>
            </div>
        );
    }
}

export default Calculator;