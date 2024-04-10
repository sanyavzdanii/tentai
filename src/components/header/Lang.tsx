import * as React from "react";
import sprite from "./../../images/sprite.svg";

export default function Lang() {

    return (
        <div className="header-lang d-flex align-items-center pointer">
            <svg className="svg-icon">
                <use xlinkHref={`${sprite}#planet-icon`}></use>
            </svg>
            <div className="p-1">ENG</div>
        </div>
    )
}