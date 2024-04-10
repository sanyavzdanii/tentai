import * as React from "react"
import {Container,} from "react-bootstrap";
import {useEffect, useState} from "react";
import {hiddenScroll} from "./helpers";
import Logo from "./header/Logo";
import Nav from "./header/Nav";
import Lang from "./header/Lang";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    interface Page {
        name: string,
        url: string
    }
    const menu: Page[] = [
        {name: 'Дарим призы', url: '#'},
        {name: 'О проекте', url: '#'},
        {name: 'Услуги', url: '#'},
        {name: 'Преимущества', url: '#'},
        {name: 'Команда', url: '#'}
    ];

    useEffect(() => {
        const mobileCheck = () => {
            if(window.innerWidth > 1199) {
                hiddenScroll(false);
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', mobileCheck);
        window.addEventListener('orientationchange', mobileCheck);

        return () => {
            window.removeEventListener('resize', mobileCheck);
            window.removeEventListener('orientationchange', mobileCheck);
        }
    }, []); // Will fire only once

    useEffect(() => {
        if(isMobileMenuOpen) {
            hiddenScroll(true);
            document.body.classList.add('mobile-menu-opened');
        } else {
            hiddenScroll(false)
            document.body.classList.remove('mobile-menu-opened');
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="header">
                <Container fluid className="d-flex justify-content-between flex-wrap flex-xl-nowrap">
                    <Logo />
                    <div className="d-flex align-items-center">
                        <Nav menuData={menu} />
                        <Lang />
                    </div>
                </Container>
            </header>
            <div className={`menu-backdrop vw-100 vh-100 ${isMobileMenuOpen ? 'show' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </>
    )
}
