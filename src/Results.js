import React from "react";

function Results(props){
    let data = props.data;
    return <div>
        <p>For your form, you inputted the following things</p>
        <p>Do you have experience? {data.hasExperience}</p>
        <p>What type of project are interested in? {data.projectInterest}</p>
    </div>
}
export default Results;