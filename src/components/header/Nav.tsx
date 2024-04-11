import * as React from "react";
import box from "./../../images/box.svg";

interface Page {
    name: string;
    url: string;
}

interface NavProps {
    menuData: Page[];
}

export default function Nav(props: NavProps) {

    return (
        <nav className="header-nav d-flex justify-content-xl-end flex-wrap flex-xl-nowrap align-items-center pe-xl-4 me-xl-2">
            {props.menuData.map((item: Page, index: number) => {
                return (
                    item.url === '#prizy' ?
                        <a key={`menu-item-${index}`} href="#" className="d-flex align-items-center">
                            <img src={box} alt='box' width={24} height={24} className="me-1" />
                            {item.name}
                        </a>
                        :
                        <a key={`menu-item-${index}`} href="#">
                            {item.name}
                        </a>
                )
            })}
        </nav>
    )
}