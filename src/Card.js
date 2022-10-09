import React from "react";

function Card(props){

    return <div className="card">
        {props.name}
        {props.desc}
    </div>
}
export default Card;