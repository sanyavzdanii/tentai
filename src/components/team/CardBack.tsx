import * as React from "react";
import {useState} from "react";

export default function CardBack(props: {head: string; text: string}) {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`team-card-back text-start position-absolute pointer ${isActive ? 'show' : ''}`} onClick={toggleClass}>
            <h4 className="mb-2">{props.head}</h4>
            <p className="custom-scroll-bar">{props.text}</p>
        </div>
    )
}