import React from "react";
import Card from "./Card";

function Results(props){
    let data = props.data;
    let courses = [
        {
            "languages":["HTML","CSS","JavaScript"],
            "recommendedCourse":"https://www.udemy.com/course/the-web-developer-bootcamp/",
            "tags":["website","courses","high-level"]
        },
        {
            "languages":["HTML","CSS","JavaScript"],
            "recommendedCourse":"https://www.w3schools.com/",
            "tags":["website","reading","high-level"]
        }
    ];
    /*
        If project type is web development, learning style is course, and level is high level, suggest:
        * HTML, CSS, Javascript

        Coursera course
        * https://www.udemy.com/course/the-web-developer-bootcamp/
    */
   let recommendedCourse = <Card data={courses[0].recommendedCourse}/>;
   let languages = courses[0].languages.map(function(language){
    return <Card data={language}/>
   });
    return <div>
        <p>For your form, you inputted the following things</p>
        {recommendedCourse}
        {languages}
    </div>
}
export default Results;