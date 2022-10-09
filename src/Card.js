import React from "react";

function Card(props){

    return <div className="box">
        <p className="subtitle is-2">{props.name}</p>
        {props.desc}
    </div>
}
export default Card;