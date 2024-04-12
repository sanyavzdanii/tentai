import * as React from "react";
import {Col, Row} from "react-bootstrap";
import img1 from "./../images/connect/1.svg";
import img2 from "./../images/connect/AppStore.svg";
import img3 from "./../images/connect/GooglePlay.svg";

export default function Connect() {

    return (
        <Row className="justify-content-center mb-50">
            <Col sm={12} className="position-relative">
                <div className="connect-wrapper d-flex flex-wrap flex-xl-nowrap justify-content-xl-between">
                    <div className="connect-wrapper__text">
                        <h3 className="mb-4 pb-2 pb-xl-0"><span>Присоединяйтесь уже сейчас</span> и открывайте<br /> для себя мир возможностей вместе с Tentai!</h3>
                        <a href='#' className="connect-wrapper__text-market me-4 mb-3 mb-xl-0 d-inline-block">
                            <img src={img2} width={180} height={52} alt="app sotre" />
                        </a>
                        <a href='#' className="connect-wrapper__text-market mb-4 mb-xl-0 pb-3 pb-xl-0 d-inline-block">
                            <img src={img3} width={180} height={52} alt="google play" />
                        </a>
                    </div>
                    <div className="connect-wrapper__hero">
                        <img src={img1} width={567} height={327} alt="Присоединяйтесь уже сейчас" />
                    </div>
                </div>
            </Col>
        </Row>
    )
}