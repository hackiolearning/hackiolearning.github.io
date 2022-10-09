import React from "react";
import Card from "./Card";

function Results(props){
    let languages = {
        "HTML":{
            "description":"HTML is a markup language used to structure a webpage and its content",
            "link":"https://www.w3schools.com/html/html_intro.asp"
        },
        "CSS":{
            "description":"CSS is a style sheet language used to describe the look of a document",
            "link":"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS"
        },
        "JavaScript":{
            "description":"JavaScript is a scripting language commonly used to add interaction to websites",
            "link":"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
        }
    }
    let services = [
        {
            "name":"Amazon AWS",
            "description":"Cloud based computing solution",
            "link":"https://aws.amazon.com/",
            "familiarity":"low-level",
            "project":"server"
        },
        {
            "name":"Godot Engine",
            "description":"Open source game engine",
            "link":"https://godotengine.org/",
            "familiarity":"high-level",
            "project":"gameserver"
        },
    ]
    let courses = [
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["A markdown language used to create website content","A stylesheet language used to style websites", "A programming language used to script websites"],
            "recommendedCourseTitle":"FreeCodeCamp",
            "link":"https://www.freecodecamp.org/",
            "recommendedCourseDesc":"FreeCodeCamp is a free, project based web development course",
            "tags":["website","courses","high-level"]
        },
        {
            "languages":["HTML","CSS","JavaScript"],
            "description": ["A markdown language used to create website content","A stylesheet language used to style websites", "A programming language used to script websites"],
            "recommendedCourseTitle":"W3Schools",
            "link":"https://www.w3schools.com/",
            "recommendedCourseDesc":"A set of text-based tutorials for web development",
            "tags":["website","reading","high-level"]
        },
        {
            "languages":["Python"],
            "description":["A versatile language with many libraries for manipulating and visualizing data"],
            "recommendedCourseTitle": "FreeCodeCamp",
            "link":"https://www.freecodecamp.org/learn/scientific-computing-with-python/",
            "recommendedCourseDesc":"An interactive tutorial for learning basic python",
            "tags":["data-visualization","hands-on","high-level"]

        },
        {
            "languages":["Scratch"],
            "description":["A block based coding website for beginners"],
            "recommendedCourseTitle": "Scratch Jumping Game Video",
            "link":"https://www.youtube.com/watch?v=1jHvXakt1qw&ab_channel=ScratchTeam",
            "recommendedCourseDesc":"A tutorial guiding you how to make a jumping game in Scratch",
            "tags":["game","video","block-coding"]

        },
    ];
    /*
        If project type is web development, learning style is course, and level is high level, suggest:
        * HTML, CSS, Javascript

        Coursera course
        * https://www.udemy.com/course/the-web-developer-bootcamp/
    */
    let projectInterest = props.data.projectInterest;
    let learningType = props.data.learningType;
    let familiarity = props.data.familiarity;
    let best = 0;
    let courseIdx = 0;
    for(let i = 0;i<courses.length;i++){
        let matches = 0;
        let course = courses[i];
        //Prioritize matches in order of precedence: interest > familiarity > learning type
        if(projectInterest === course.tags[0]){
            matches++;
            if(familiarity === course.tags[2]){
                matches++;
                if(learningType === course.tags[1]){
                    matches++;
                }
            }
        }
        if(matches > best){
            best = matches;
            courseIdx = i;
        }

    }
    let languageElements = [];
    for (let i = 0; i < courses[courseIdx].languages.length; i++) {
        let langName = courses[courseIdx].languages[i]
        let langLink = languages[langName] ? languages[langName].link : "";
        languageElements.push(<Card link={langLink} name={langName} desc={courses[courseIdx].description[i]} color="success"/>);
    }
    
   let recommendedCourse = <Card link={courses[courseIdx].link} name={courses[courseIdx].recommendedCourseTitle} desc={courses[courseIdx].recommendedCourseDesc} color="danger"/>;
    

    return <div className>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-4" >
                <a onClick={props.reset}>
                    <img src="navbarlogo.png" height="50" width="292"/>
                </a>
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
            <p className="mt-5 mb-3">These recommendations match {best}/3 options selected</p>
            <h2 className="title is-2 margin-top">Recommended Languages</h2>
            <div className="columns is-flex-wrap-wrap">
                {languageElements}
            </div>
            <h2 className="title is-2">Recommended Course</h2>
            <div className="columns is-flex-wrap-wrap">
                {recommendedCourse}
            </div>
        </div>
            
        
    </div>
}
export default Results;