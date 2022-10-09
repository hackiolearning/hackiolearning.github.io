import React from "react";
import Card from "./Card";

function Results(props){
    let projectInterest = props.data.projectInterest;
    let learningType = props.data.learningType;
    let level = props.data.level;
    let courses = [
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["HTML DESC","CSS DESC", "JS DESC"],
            "recommendedCourseTitle":"Udemy Web Development",
            "recommendedCourseURL":"https://www.udemy.com/course/the-web-developer-bootcamp/",
            "recommendedCourseDesc":"A video course series on web development",
            "tags":["website","courses","high-level"]
        },
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["HTML DESC","CSS DESC", "JS DESC"],
            "recommendedCourseTitle":"W3 Schools Web Development",
            "recommendedCourseURL":"https://www.w3schools.com/",
            "recommendedCourseDesc":"A set of tutorials for web development",
            "tags":["website","reading","high-level"]
        }
    ];
    /*
        If project type is web development, learning style is course, and level is high level, suggest:
        * HTML, CSS, Javascript

        Coursera course
        * https://www.udemy.com/course/the-web-developer-bootcamp/
    */
    
    function getLanguageCourse() {
        let course = 0;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].tags[0] === projectInterest) {
                course = i;
            }
        }
        return course;
    }
    function getMethodCourse() {
        let course = 0;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].tags[1] === learningType && courses[i].tags[0] === projectInterest) {
                course = i;
            }
        }
        return course;
    }
    let courseIdx = getLanguageCourse();
    function getLanguages() {
        let output = [];
        for (let i = 0; i < courses[courseIdx].languages.length; i++) {
        
            output.push(<Card name={courses[courseIdx].languages[i]} desc={courses[courseIdx].description[i]}/>);
        }
        console.log(output);
        return output;
    }
    
    

    
   let recommendedCourse = <Card name={courses[getMethodCourse()].recommendedCourseTitle} desc={courses[getMethodCourse()].recommendedCourseDesc}/>;
    

    return <div>
        <p>For your form, you inputted the following things</p>
        <p>What software do you want to make? {projectInterest}</p>
        <p>How do you learn? {learningType}</p>
        <p>What type of language would you like to learn? {level}</p>
        <h2>Recommended Languages</h2>

        {getLanguages()}
        <h2>Recommended Course</h2>
        {recommendedCourse}
    </div>
}
export default Results;