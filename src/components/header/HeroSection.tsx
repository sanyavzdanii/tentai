import * as React from "react";
import bg from "./../../images/hero-bg.svg";
import {Container} from "react-bootstrap";
import heroImage from "../../images/hero-image.svg";
import sprite from "./../../images/sprite.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function HeroSection() {

    return (
        <section className="hero-section d-flex" style={{background: `url(${bg}) center center no-repeat`}}>
            <Container className="d-flex justify-content-center align-items-center">
                <div className="hero-section__inner d-flex flex-wrap justify-content-center">
                    <LazyLoadImage src={heroImage} alt='box' width={599} height={204} className="hero-section__inner-img mb-4 px-3 px-xl-0"/>
                    <div className="w-100 d-flex justify-content-center">
                        <a href="#contact-us" className="d-inline-block btn-1">
                            Связаться с нами
                            <svg className="svg-icon ms-2">
                                <use xlinkHref={`${sprite}#next-icon`}></use>
                            </svg>
                        </a>
                    </div>

                </div>
            </Container>
        </section>
    )
}