import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import logo from "./../images/footer/logo.svg";
import soc1 from "./../images/footer/social-1.svg";
import soc2 from "./../images/footer/social-2.svg";
import soc3 from "./../images/footer/social-3.svg";
import mail from "./../images/footer/email.svg";
import phone from "./../images/footer/phone.svg";

export default function Footer() {

    return (
        <footer>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={6} xl={3} className="position-relative">
                        <div className="mb-4 pb-xl-3">
                            <img src={logo} alt='box' width={140} height={40}/>
                        </div>
                        <a href="#" className="footer-social mb-2 me-2">
                            <img src={soc1} alt='appstore' width={42} height={42}/>
                        </a>
                        <a href="#" className="footer-social mb-2 me-2">
                            <img src={soc2} alt='playstore' width={42} height={42}/>
                        </a>
                        <a href="#" className="footer-social mb-2">
                            <img src={soc3} alt='appgallery' width={42} height={42}/>
                        </a>
                    </Col>
                    <Col sm={12} md={6} xl={3} className="position-relative">
                        <div className="footer-head mb-3">Компания</div>
                        <a href="#" className="footer-link d-block mb-2">О проекте</a>
                        <a href="#" className="footer-link d-block mb-2">Команда</a>
                        <a href="#" className="footer-link d-block mb-2">Инвесторам</a>
                        <a href="#" className="footer-link d-block mb-2">Партнерам</a>
                        <a href="#" className="footer-link d-block mb-2">Рекламодателям</a>
                    </Col>
                    <Col sm={12} md={6} xl={3} className="position-relative">
                        <div className="footer-head mb-3">Документы</div>
                        <a href="#" className="footer-link d-block mb-2">Политика конфиденциальности</a>
                        <a href="#" className="footer-link d-block mb-2">Договор-оферта</a>
                        <a href="#" className="footer-link d-block mb-2">Пользовательское Соглашение</a>
                        <a href="#" className="footer-link d-block mb-2">Обработка персональных данных</a>
                        <a href="#" className="footer-link d-block mb-2">API документация</a>
                    </Col>
                    <Col sm={12} md={6} xl={3} className="position-relative">
                        <div className="footer-head mb-3">Контакты</div>
                        <a href="mailto:info@tentai.pro"
                           className="footer-link d-flex align-items-center mb-2">
                            <img src={mail} alt='appstore' width={24} height={24} className="me-3" />
                            info@tentai.pro
                        </a>
                        <a href="tel:+66123456789"
                           className="footer-link d-flex align-items-center">
                            <img src={phone} alt='appstore' width={24} height={24} className="me-3" />
                            +66123456789
                        </a>
                    </Col>
                    <Col sm={12}>
                        <Row>

                        </Row>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}