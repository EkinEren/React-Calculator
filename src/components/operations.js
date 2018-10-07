import { Decimal } from "decimal.js";

export const CalculatorOperations = {
    "/": (prevValue, nextValue) => new Decimal(prevValue / nextValue),
    "*": (prevValue, nextValue) => new Decimal(prevValue * nextValue),
    "+": (prevValue, nextValue) => new Decimal(prevValue + nextValue),
    "-": (prevValue, nextValue) => new Decimal(prevValue - nextValue),
    "=": (prevValue, nextValue) => new Decimal(nextValue)
}