import * as React from "react";
import CardBack from "./CardBack";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function TeamMemberCard(props: {img: string; head: string; text: string; name: string; job: string;}) {

    return (
        <div className="team-card text-center mb-5 mb-xl-0">
            <div className="position-relative">
                <LazyLoadImage src={props.img} width={265} height={300} alt={props.name}/>
                <CardBack head={props.head} text={props.text}/>
            </div>
            <h4 className="mt-3 mb-1">{props.name}</h4>
            <p>{props.job}</p>
        </div>
    )
}