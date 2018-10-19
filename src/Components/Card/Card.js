import React from "react";
import "./Card.css";

const Card = props => {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.shuffleDeck(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}


export default Card;