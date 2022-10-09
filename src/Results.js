import React from "react";
import Card from "./Card";

function Results(props){
    let projectInterest = props.data.projectInterest;
    let learningType = props.data.learningType;
    let courses = [
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["A markdown language used to create website content.","A stylesheet language used to style websites.", "A programming language used to script websites."],
            "recommendedCourseTitle":"Udemy Web Development",
            "recommendedCourseURL":"https://www.udemy.com/course/the-web-developer-bootcamp/",
            "recommendedCourseDesc":"A video course series on web development",
            "tags":["website","courses","high-level"]
        },
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["A markdown language used to create website content.","A stylesheet language used to style websites.", "A programming language used to script websites."],
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
    let languages = [];
    for (let i = 0; i < courses[courseIdx].languages.length; i++) {
    
        languages.push(<Card name={courses[courseIdx].languages[i]} desc={courses[courseIdx].description[i]} color="success"/>);
    }
    console.log(languages);
    
    
    

    
   let recommendedCourse = <Card name={courses[getMethodCourse()].recommendedCourseTitle} desc={courses[getMethodCourse()].recommendedCourseDesc} color="danger"/>;
    

    return <div className>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand navbar-left-margin" >
                <img src="navbarlogo.png" height="59.5" width="292"/>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start navbar-left-margin">
                    <a className="navbar-item ">
                        <p className="box has-background-success">Languages</p>
                    </a>

                    <a className="navbar-item">
                        <p className="box has-background-warning">Services</p>
                    </a>

                    <a className="navbar-item">
                        <p className="box has-background-danger">Tutorials</p>
                    </a>

                   
                </div>
            </div>
        </nav>
        <div className="container">
            
            <h2 className="title is-2">Recommended Languages</h2>
            <div className="columns">
                {languages}
            </div>
            <h2 className="title is-2">Recommended Course</h2>
            <div className="columns">
                {recommendedCourse}
            </div>
        </div>
            
        
    </div>
}
export default Results;