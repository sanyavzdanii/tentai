import * as React from "react";
import {Col, Row} from "react-bootstrap";
import img1 from "./../images/team/1.png";
import img2 from "./../images/team/2.png";

export default function TeamList() {
    const teamData: {img: string, head: string, text: string, name: string, job: string}[] = [
        {
            img: img1,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img2,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img1,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img2,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img1,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img2,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img1,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        },
        {
            img: img2,
            head: '“Мы начали с мечты: создать онлайн платформу, где каждый может легко покупать и продавать”',
            text: 'Мы стремимся преобразовать взаимодействие с рынком Таиланда, предлагая интуитивно понятный интерфейс для аренды жилья, проката автомобилей и доступа к фриланс услугам. Наша цель - сделать Tentai синонимом надежной, эффективной и',
            name: 'Имя Фамилия',
            job: 'Основатель и СЕО Tentai'
        }
    ];

    interface Card {
        img: string;
        head: string;
        text: string;
        name: string;
        job: string;
    }

    return (
        <Row className="justify-content-center mb-50 position-relative">
            <Col sm={12} className="mb-4">
                <h2 className="head-text text-center">Наша команда про Tentai</h2>
            </Col>
            {teamData.map((card: Card) => {
                return (
                    <Col md={6} xl={3}>
                        <div className="team-card text-center mb-5 mb-xl-0">
                            <img src={card.img} width={265} height={300} alt={card.name}/>
                            <h4 className="mt-3 mb-1">{card.name}</h4>
                            <p>{card.job}</p>
                        </div>
                    </Col>
                )
            })}
            <Col sm={12}>
                <a href="#" className="btn-2">
                    <span>Посмотреть всех</span>
                </a>
            </Col>
        </Row>
    )
}