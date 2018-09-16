import React from "react";
//import { Row, Col } from "antd";
import 'antd/dist/antd.css';
import CalcButton from "./CalcButton";
import '../styles/ButtonPanel.css';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

class CalcButtonPanel extends React.Component {

    render() {

        return (

            <div className="ButtonPanel">
                <ButtonGroup>
                    <CalcButton name="C" block></CalcButton>
                    <CalcButton name="1" block></CalcButton>
                    <CalcButton name="4" block></CalcButton>
                    <CalcButton name="7" block></CalcButton>
                    <CalcButton name="0" block></CalcButton>
                </ButtonGroup>
                <ButtonGroup>
                    <CalcButton name="+-" block></CalcButton>
                    <CalcButton name="2" block></CalcButton>
                    <CalcButton name="5" block></CalcButton>
                    <CalcButton name="6" block></CalcButton>
                    <CalcButton name="."></CalcButton>
                </ButtonGroup>
                <ButtonGroup>
                    <CalcButton name="%" block></CalcButton>
                    <CalcButton name="3" block></CalcButton>
                    <CalcButton name="6" block></CalcButton>
                    <CalcButton name="9" block></CalcButton>
                    <CalcButton name=" "></CalcButton>
                </ButtonGroup>
                <ButtonGroup>
                    <CalcButton name="÷" block></CalcButton>
                    <CalcButton name="+" block></CalcButton>
                    <CalcButton name="-" block></CalcButton>
                    <CalcButton name="x" block></CalcButton>
                    <CalcButton name="=" block></CalcButton>
                </ButtonGroup>
            </div>
        );
    }

}

export default CalcButtonPanel;

/*style={{
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: "1 0 auto"
}}*/

/* <Row>
                    <Col><CalcButton name="C"></CalcButton></Col>
                    <Col><CalcButton name="1"></CalcButton></Col>
                    <Col><CalcButton name="4"></CalcButton></Col>
                    <Col><CalcButton name="7"></CalcButton></Col>
                    <Col><CalcButton name="0"></CalcButton></Col>
                </Row>
                <Row>
                    <Col><CalcButton name="+/-"></CalcButton></Col>
                    <Col><CalcButton name="2"></CalcButton></Col>
                    <Col><CalcButton name="5"></CalcButton></Col>
                    <Col><CalcButton name="8"></CalcButton></Col>
                    <Col><CalcButton name="."></CalcButton></Col>
                </Row>
                <Row>
                    <Col><CalcButton name="%"></CalcButton></Col>
                    <Col><CalcButton name="3"></CalcButton></Col>
                    <Col><CalcButton name="6"></CalcButton></Col>
                    <Col><CalcButton name="9"></CalcButton></Col>
                    <Col><CalcButton name="="></CalcButton></Col>
                </Row>
                <Row>
                    <Col><CalcButton name="÷"></CalcButton></Col>
                    <Col><CalcButton name="+"></CalcButton></Col>
                    <Col><CalcButton name="-"></CalcButton></Col>
                    <Col><CalcButton name="x"></CalcButton></Col>
                </Row> */