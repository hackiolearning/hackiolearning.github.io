import React from 'react';
import './css/style.css';
class Answer{
    constructor(text,val,tooltip){
        this.text = text;
        this.val = val; 
        this.tooltip = tooltip;
    }
}
class Question extends React.Component{
    constructor(props){
        super();
    }
    
    onChange(idx){

        if(this.props.formType === "multiselect"){
            return () => {
                let property = this.props.property;
                let val = this.props.answers[idx].val;
                let arr = this.props.data[property];
                let searchIndex = arr.indexOf(val);
                if(searchIndex === -1){
                    arr.push(val);
                } else{
                    arr.splice(searchIndex,1);
                }
                this.props.handleChange(property,arr);
                this.props.continue();
            }
        }
        if(this.props.formType === "radio"){
            return () => {
                let property = this.props.property;
                let value = this.props.answers[idx].val;
                this.props.handleChange(property,value);
                this.props.continue();
            }
        }
    }
    render(){
        let appProp = this.props.data[this.props.property];
        const answerElems = this.props.answers.map((answer,idx) => {
            let classMap = ['is-danger','is-warning','is-success'];
            return <button data-tooltip={answer.tooltip} onClick={this.onChange(idx).bind(this)} key={idx} className={"button m-1 is-medium has-tooltip-multiline " + classMap[idx % 3]}>{answer.text}</button>
        });
        return (<section className="hero is-fullheight">
        <div className="hero-body  is-flex-direction-column">
            <div className="block">
                <p className="title is-2 light-purple">Help us get to know you by answering a few questions</p>
            </div>
          <div className="box pt-6 is-flex-direction-column is-max-desktop container mb-6 is-fullwidth is-flex is-align-items-center is-justify-content-center">
          <p className="subtitle is-3">{this.props.question}</p>
          <div className="has-text-centered">
                {answerElems}
            </div>
        {<a className="abs-bl has-text-grey" onClick={this.props.back}>&lt; go back</a>}
        </div>
        </div>
        </section>);
    }
}


function Form(props) {
  let data = props.data;
  let formState = {};

  if(data.questionNumber === 0){
    formState = <Question question="What software do you want to make?" formType="radio" property="projectInterest" answers={[
        new Answer("Games","game","Interactive game with user interface and visual feedback."),
        new Answer("Websites","website","Content display with limited interactivity."),
        new Answer("Servers","server","Computing accessing a central resource or service on a network."),
        new Answer("Data visualizations","data-visualization","Graphic representation of data."),
        new Answer("Data structures and algorithms","data-structures-algorithms","Theoretical computer science problem solving.")
    ]} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  if(data.questionNumber === 1){
    formState = <Question question="How do you learn best?" formType="radio" property="learningType" answers={[
        new Answer("Hands-on","hands-on"),
        new Answer("Courses","courses"),
        new Answer("Reading","reading"),
        new Answer("Video","video")
    ]} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  if(data.questionNumber === 2){
    let ansArr = [new Answer("Abstract coding","abstract-coding","A simpler, generally more visual representation for coding. Generally used for true beginners to understand concepts before syntax.")];
    if(data.projectInterest !== "data-structures-algorithms"){
        //has high level
        ansArr.push(new Answer("High-level","high-level","User-oriented style of coding, with great deviation from hardware architecture."));
    }
    if(data.projectInterest !== "website"){
        //has low level
        ansArr.push(new Answer("Low-level","low-level","Programming in terms that computers generally understand better than people."));
    }
    formState = <Question question="What type of language do you want to learn?" formType="radio" property="level" answers={ansArr} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  return (
    <>
        {formState}
    </>
  );
}

export default Form;
