import * as React from "react";
import {Col, Row} from "react-bootstrap";
import img1 from "./../images/connect/1.svg";

export default function Connect() {

    return (
        <Row className="justify-content-center mb-50">
            <Col sm={12} className="position-relative">
                <div className="connect-wrapper d-flex flex-wrap flex-xl-nowrap justify-content-xl-between">
                    <div className="connect-wrapper__text">
                        <h3 className="mb-4"><span>Присоединяйтесь уже сейчас</span> и открывайте<br /> для себя мир возможностей вместе с Tentai!</h3>
                    </div>
                    <div className="connect-wrapper__hero">
                        <img src={img1} width={567} height={327} alt="Присоединяйтесь уже сейчас" />
                    </div>
                </div>
            </Col>
        </Row>
    )
}