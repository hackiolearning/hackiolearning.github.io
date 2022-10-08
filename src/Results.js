import React from "react";

function Results(props){
    let data = props.data;
    /*
        If project type is web development, learning style is course, and level is high level, suggest:
        * HTML, CSS, Javascript

        Coursera course
        * https://www.udemy.com/course/the-web-developer-bootcamp/
    */
    return <div>
        <p>For your form, you inputted the following things</p>
        <p>Do you have experience? {data.hasExperience}</p>
        <p>What type of project are interested in? {data.projectInterest}</p>
    </div>
}
export default Results;