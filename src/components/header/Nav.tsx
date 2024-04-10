import * as React from "react";

interface Page {
    name: string;
    url: string;
}

interface NavProps {
    menuData: Page[];
}

export default function Nav(props: NavProps) {

    return (
        <nav className="header-nav d-flex justify-content-xl-end flex-wrap flex-xl-nowrap pe-xl-4 me-xl-2">
            {props.menuData.map((item: Page, index: number) => {
                return (
                    <a key={`menu-item-${index}`} href="#">{item.name}</a>
                )
            })}
        </nav>
    )
}