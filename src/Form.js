import React from 'react';
import './css/style.css';
class Answer{
    constructor(text,val){
        this.text = text;
        this.val = val; 
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
            }
        }
        if(this.props.formType === "radio"){
            return () => {
                let property = this.props.property;
                let value = this.props.answers[idx].val;
                this.props.handleChange(property,value);
            }
        }
    }
    render(){
        let appProp = this.props.data[this.props.property];
        const answerElems = this.props.answers.map((answer,idx) => {
            let shouldBeSelected = false;
            if(this.props.formType === "radio"){
                shouldBeSelected = appProp===answer.val;
            }
            if(this.props.formType === "multiselect"){
                shouldBeSelected = appProp.indexOf(answer.val) !== -1;
            }
            return <button onClick={this.onChange(idx).bind(this)} key={idx} className={"button"  + (shouldBeSelected ? " is-primary" : "")}>{answer.text}</button>
        });
        return (<div className="form">
            <p className="title">{this.props.question}</p>
            {answerElems}
            {this.props.data.questionNumber > 0 ? <div className="control">
                <button className="button is-primary" onClick={this.props.back}>Back</button>
            </div> : ""}
            <div className="control">
                <button className="button is-primary" onClick={this.props.continue}>Continue</button>
            </div>
        </div>);
    }
}


function Form(props) {
  let data = props.data;
  let formState = {};

  if(data.questionNumber === 0){
    formState = <Question question="Have you coded before?"formType="radio" property="hasExperience" answers={[
        new Answer("yes",true),
        new Answer("no",false)
    ]} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  if(data.questionNumber === 1){
    formState = <Question question="What software do you want to make?" formType="radio" property="projectInterest" answers={[
        new Answer("Games","game"),
        new Answer("Websites","website"),
        new Answer("Servers","server"),
        new Answer("Data visualizations","data-visualization"),
        new Answer("Data structures and algorithms","data-structures-algorithms")
    ]} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  if(data.questionNumber === 2){
    formState = <Question question="How do you learn best?" formType="radio" property="learningType" answers={[
        new Answer("Hands-on","hands-on"),
        new Answer("Courses","courses"),
        new Answer("Reading","reading"),
        new Answer("Video","video")
    ]} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  if(data.questionNumber === 3){
    formState = <Question question="What type of language do you want to learn?" formType="radio" property="level" answers={[
        new Answer("Block coding","block-coding"),
        new Answer("High-level","high-level"),
        new Answer("Low-level","low-level")
    ]} handleChange={props.handleChange} continue={props.continue} data={data} back={props.back}/>
  }
  if(data.questionNumber === 4){
    formState = <p>You have completed the form</p>
  }
  return (
    <div className="box">
      {formState}
    </div>
  );
}

export default Form;
