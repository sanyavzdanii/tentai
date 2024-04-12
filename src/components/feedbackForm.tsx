import * as React from "react";
import {Col, Row} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import bg from "../images/feedback-bg.svg";

export default function FeedbackForm() {
    interface Errors {
        email: string;
        name: string;
        text: string;
    }

    return (
        <Row className="feedback-form-wrapper justify-content-center mb-50" style={{background: `url(${bg}) center center no-repeat`}}>
            <Col sm={12} xl={6} className="feedback-form-left position-relative">
                <h2 className="mb-4 pb-xl-2">Станьте частью революции онлайн-торговли в Таиланде</h2>
                <p className="mb-4 pb-xl-2">Для дополнительной информации и сотрудничества, пожалуйста, свяжитесь с нами через указанные контактные данные. Мы всегда открыты для ваших вопросов и предложений!</p>
            </Col>
            <Col sm={12} xl={6} className="position-relative">
                <Formik
                    initialValues={{ email: '', name: '', text: '' }}
                    validate={values => {
                        const errors: Errors = {email: '', name: '', text: ''};

                        if (!values.email) {
                            errors.email = '* Объязательное поле';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Некорректный адрес';
                        }

                        if (!values.email) {
                            errors.text = '* Объязательное поле';
                        }
                        return errors;
                    }}
                    onSubmit={(values: Errors, { setSubmitting }: FormikHelpers<Errors>) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="feedback-form">
                            <p className="feedback-form-head mb-2">Имя</p>
                            <Field type="name" name="name" className="d-block w-100 mb-4"/>
                            <ErrorMessage name="name" component="div" className="feedback-form-error" />
                            <p className="feedback-form-head mb-2">Почта</p>
                            <Field type="email" name="email" className="d-block w-100 mb-4"/>
                            <ErrorMessage name="email" component="div" className="feedback-form-error" />
                            <p className="feedback-form-head mb-2">Сообщение</p>
                            <Field type="textarea" name="text" className="d-block w-100 mb-4" as="textarea"/>
                            <ErrorMessage name="text" component="div" className="feedback-form-error" />

                            <button type="submit" disabled={isSubmitting} className="btn-1">
                                Отправить сообщение
                            </button>
                        </Form>
                    )}
                </Formik>
            </Col>
        </Row>
    )
}