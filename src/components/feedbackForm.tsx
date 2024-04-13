import * as React from "react";
import {Col, Row} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik, FormikErrors} from "formik";
import bg from "../images/feedback-bg.svg";
import sprite from "../images/sprite.svg";

export default function FeedbackForm() {
    interface Errors {
        email: string;
        name: string;
        text: string;
    }

    return (
        <Row className="feedback-form-wrapper justify-content-center" style={{background: `url(${bg}) center center no-repeat`}}>
            <Col sm={12} xl={6} className="feedback-form-left position-relative">
                <h2 className="mb-4 pb-xl-2">Станьте частью революции онлайн-торговли в Таиланде</h2>
                <p className="mb-4 pb-xl-2">Для дополнительной информации и сотрудничества, пожалуйста, свяжитесь с нами через указанные контактные данные. Мы всегда открыты для ваших вопросов и предложений!</p>
                <a href="mailto:info@tentai.pro" className="feedback-form-left__social d-flex align-items-center mb-2 pb-1">
                    <svg className="svg-icon me-3">
                        <use xlinkHref={`${sprite}#email-icon`}></use>
                    </svg>
                    info@tentai.pro
                </a>
                <a href="tel:+66123456789" className="feedback-form-left__social d-flex align-items-center">
                    <svg className="svg-icon me-3">
                        <use xlinkHref={`${sprite}#phone-icon`}></use>
                    </svg>
                    +66123456789
                </a>
            </Col>
            <Col sm={12} xl={6} className="position-relative">
                <Formik
                    initialValues={{email: '', name: '', text: '' }}

                    validate={(values: Errors) => {
                        const errors: FormikErrors<Errors> = {};

                        if (!values.email) {
                            errors.email = '* Объязательное поле';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Некорректный адрес';
                        }

                        if (!values.text) {
                            errors.text = '* Объязательное поле';
                        }

                        return errors;
                    }}

                    onSubmit={(values) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            //change it on sending to back
                        }, 400);
                    }}
                >
                    {({validateForm}) => (
                        <Form className="feedback-form">
                            <p className="feedback-form-head mb-2">Имя</p>
                            <Field type="text" name="name" className="d-block w-100 mb-4"/>
                            <ErrorMessage name="name" component="div" className="feedback-form-error" />
                            <p className="feedback-form-head mb-2">Почта</p>
                            <Field type="email" name="email" className="d-block w-100 mb-4"/>
                            <ErrorMessage name="email" component="div" className="feedback-form-error" />
                            <p className="feedback-form-head mb-2">Сообщение</p>
                            <Field type="textarea" name="text" className="d-block w-100 mb-4" as="textarea"/>
                            <ErrorMessage name="text" component="div" className="feedback-form-error" />

                            <button type="submit" className="btn-1">
                                Отправить сообщение
                            </button>
                        </Form>
                    )}
                </Formik>
            </Col>
        </Row>
    )
}