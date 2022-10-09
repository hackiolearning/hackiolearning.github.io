import React from "react";

function Card(props){
    let name = "box is-fullheight has-background-" + props.color;
    return <div className="column is-one-third-desktop is-half-tablet m-0" >
        <div className={name}>
            <p className="subtitle is-3">{props.name}</p>
            {props.desc}
        </div>
        
    </div>

}
export default Card;