import React from "react";
import Card from "./Card";

function Results(props){
    let projectInterest = props.data.projectInterest;
    let learningType = props.data.learningType;
    let courses = [
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["A markdown language used to create website content.","A stylesheet language used to style websites.", "A programming language used to script websites."],
            "recommendedCourseTitle":"Udemy",
            "recommendedCourseURL":"https://www.udemy.com/course/the-web-developer-bootcamp/",
            "recommendedCourseDesc":"A video course series on web development",
            "tags":["website","courses","high-level"]
        },
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["A markdown language used to create website content.","A stylesheet language used to style websites.", "A programming language used to script websites."],
            "recommendedCourseTitle":"W3Schools",
            "recommendedCourseURL":"https://www.w3schools.com/",
            "recommendedCourseDesc":"A set of text-based tutorials for web development",
            "tags":["website","reading","high-level"]
        },
        {
            "languages":["Python"],
            "description":["A versatile language with many libraries for manipulating and visualizing data."],
            "recommendedCourseTitle": "FreeCodeCamp",
            "recommendedCourseURL":"https://www.freecodecamp.org/learn/scientific-computing-with-python/",
            "recommendedCourseDesc":"An interactive tutorial for learning basic python",
            "tags":["data-visualization","hands-on","high-level"]

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
            <div className="navbar-brand ml-4" >
                <img src="navbarlogo.png" height="50" width="292"/>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start ml-4">
                    <a className="navbar-item p-0 ml-2">
                        <p className="button has-background-success">Languages</p>
                    </a>

                    <a className="navbar-item p-0 ml-2">
                        <p className="button has-background-warning">Services</p>
                    </a>

                    <a className="navbar-item p-0 ml-2">
                        <p className="button has-background-danger">Tutorials</p>
                    </a>

                   
                </div>
            </div>
        </nav>
        <div className="container">
            
            <h2 className="title is-2 margin-top">Recommended Languages</h2>
            <div className="columns is-flex-wrap-wrap">
                {languages}
            </div>
            <h2 className="title is-2">Recommended Course</h2>
            <div className="columns is-flex-wrap-wrap">
                {recommendedCourse}
            </div>
        </div>
            
        
    </div>
}
export default Results;