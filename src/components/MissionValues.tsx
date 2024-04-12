import * as React from "react";
import {Col, Row} from "react-bootstrap";
import img1 from "./../images/mission/1.svg";
import img2 from "./../images/mission/2.svg";
import img3 from "./../images/mission/3.svg";

export default function MissionValues() {
    const cardsData: {img: string, head: string, subHead: string}[] = [
        {
            img: img1,
            head: 'Создать интернацио-нальное сообщество',
            subHead: 'НАША МИССИЯ'
        },
        {
            img: img2,
            head: 'Ведущая платформа для торговли',
            subHead: 'ВИДЕНЬЕ'
        },
        {
            img: img3,
            head: 'Доступность для всех пользователей',
            subHead: 'ПРЕДНАЗНАЧЕНИЕ'
        }
    ];

    interface Card {
        img: string;
        head: string;
        subHead: string;
    }

    return (
        <Row className="justify-content-center mb-50">
            <Col sm={12} className="mb-4">
                <h2 className="head-text text-center">Миссия и ценности</h2>
            </Col>
            {cardsData.map((card: Card, index) => {
                return (
                    <Col md={6} xl={4} key={`card-${index}`}>
                        <div className="mission-card text-center mb-5 mb-xl-0">
                            <img src={card.img} width={304} height={231} alt={card.head}/>
                            <p className="text-uppercase">{card.subHead}</p>
                            <h3 className="p-3">{card.head}</h3>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}