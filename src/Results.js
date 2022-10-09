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
        },
        "Scratch":{
            "description":"A block based coding website for beginners",
            "link":"https://scratch.mit.edu/"
        },
        "Stencyl":{
            "descrption":"A block based game engine usable for mobile, web, and desktop games",
            "link":"https://www.stencyl.com/"
        },
        "Unity":{
            "descrption":"Powerful game engine with 2D and 3D support",
            "link":"https://unity.com/"
        },
        "Godot":{
            "descrption":"Open source game engine with powerful 2D rendering",
            "link":"https://godotengine.org/"
        },
        "Squarespace":{
            "description":"placeholder",
            "link":"placeholder"
        },
        "Unreal Engine":{
            "description":"placeholder",
            "link":"placeholder"
        },
        "C++":{
            "description":"placeholder",
            "link":"placeholder"
        },
        "C":{
            "description":"placeholder",
            "link":"placeholder"
        },
        "Python":{
            "description":"placeholder",
            "link":"placeholder"
        },
        "NodeJS":{
            "description":"placeholder",
            "link":"placeholder"
        },
        "Postman":{
            "description":"placeholder",
            "link":"placeholder"
        },
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
            "recommendedCourseTitle":"FreeCodeCamp",
            "link":"https://www.freecodecamp.org/",
            "recommendedCourseDesc":"FreeCodeCamp is a free, project based web development course",
            "tags":["website","courses","high-level"]
        },
        {
            "languages":["HTML","CSS","JavaScript"],
            "recommendedCourseTitle":"W3Schools",
            "link":"https://www.w3schools.com/",
            "recommendedCourseDesc":"A set of text-based tutorials for web development",
            "tags":["website","reading","high-level"]
        },
        {
            "languages":["Python"],
            "recommendedCourseTitle": "FreeCodeCamp",
            "link":"https://www.freecodecamp.org/learn/scientific-computing-with-python/",
            "recommendedCourseDesc":"An interactive tutorial for learning basic python",
            "tags":["data-visualization","hands-on","high-level"]

        },
        {
            "languages":["Scratch"],
            "recommendedCourseTitle": "Scratch Jumping Game Video",
            "link":"https://www.youtube.com/watch?v=1jHvXakt1qw&ab_channel=ScratchTeam",
            "recommendedCourseDesc":"A tutorial guiding you how to make a jumping game in Scratch",
            "tags":["game","video","block-coding"]
        },
        {
            "languages":["Godot","Unity"],
            "recommendedCourseTitle":"Unity Essentials",
            "recommendedCourseDesc":"Course designed for those new to Unity",
            "link":"https://learn.unity.com/pathway/unity-essentials",
            "tags":["game","video","high-level"]
        },
        {
            "languages":["C++","Unreal Engine"],
            "recommendedCourseTitle":"Learn C++ for Game Development",
            "recommendedCourseDesc":"Learn the basics of C++ to prepare you for game development programming!",
            "link":"https://www.udemy.com/course/learn-cpp-for-ue4-unit-1/",
            "tags":["game","course","low-level"]
        },
        {
            "languages":["Squaresquare"],
            "recommendedCourseTitle":"Squarespace Tutorial for Beginners",
            "recomendedCourseDesc":"A video explaining how to use Squarespace to create professional, codeless websites",
            "link":"https://www.youtube.com/watch?v=f7q6eFnEZ7Y&ab_channel=SantrelMedia",
            "tags":["website","video","abstract"]
        },
        {
            "languages":["Postman"],
            "recommendedCourseTitle":"Introduction to APIs, Postman and API testing",
            "recomendedCourseDesc":"Explains what an API is, how they relate to servers, and how you can access them with Postman",
            "link":"https://www.youtube.com/watch?v=JzpFsrZnNDo&t=0s&ab_channel=ValentinDespa",
            "tags":["server","video","abstract"]
        },
        {
            "languages":["NodeJS","Flask"],
            "recommendedCourseTitle":"NodeJS - The Complete Guide",
            "recomendedCourseDesc":"Course introducing AWS and related technologies",
            "link":"https://www.udemy.com/course/nodejs-the-complete-guide/",
            "tags":["server","course","high-level"]
        },
        {
            "languages":["C++"],
            "recommendedCourseTitle":"Building a simple server with C++",
            "recomendedCourseDesc":"Article describing a basic low level server implementation",
            "link":"https://ncona.com/2019/04/building-a-simple-server-with-cpp/",
            "tags":["server","reading","low-level"]
        },
        {
            "languages":["Excel"],
            "recommendedCourseTitle":"Excel video training",
            "recomendedCourseDesc":"Microsoft-provided tutorials for using Excel",
            "link":"https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb",
            "tags":["data-visualization","video","abstract"]
        },
        {
            "languages":["C++"],
            "recommendedCourseTitle":"C++ data science article on medium",
            "recomendedCourseDesc":"A working code example on how to implement basic machine learning in C++",
            "link":"https://towardsdatascience.com/data-preprocessing-and-visualization-in-c-6d97ed236f3b",
            "tags":["data-visualization","reading","low-level"]
        },
        {
            "languages":["Python","Java"],
            "recommendedCourseTitle":"Python Data Structures",
            "recomendedCourseDesc":"This course introduces core Python data strctures",
            "link":"https://www.coursera.org/learn/python-data?irclickid=xyMXqh2zTxyNRxFVN2z1fRCmUkDQu6W%3AQS5VTU0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=3294490&utm_content=b2c",
            "tags":["data-structures-algorithms","course","high-level"]
        },
        {
            "languages":["C++","C"],
            "recommendedCourseTitle":"Data Structure & Algorithm using C++",
            "recomendedCourseDesc":"Learn different data structures and problem solving skills",
            "link":"https://www.udemy.com/course/data-structures-algorithms-using-c-zero-to-mastery/",
            "tags":["data-structures-algorithms","course","low-level"]
        }
    ];
    /*
        If project type is web development, learning style is course, and level is high level, suggest:
        * HTML, CSS, Javascript

        Coursera course
        * https://www.udemy.com/course/the-web-developer-bootcamp/
    */
    let projectInterest = props.data.projectInterest;
    let learningType = props.data.learningType;
    let level = props.data.level;
    let best = 0;
    let courseIdx = 0;
    for(let i = 0;i<courses.length;i++){
        let matches = 0;
        let course = courses[i];
        //Prioritize matches in order of precedence: interest > level > learning type
        if(projectInterest === course.tags[0]){
            matches++;
            if(level === course.tags[2]){
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
        languageElements.push(<Card link={langLink} name={langName} desc={languages[langName].description} color="success"/>);
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
            <p className="mt-5 mb-3">These recommendations match {best}/3 options selected.</p>
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