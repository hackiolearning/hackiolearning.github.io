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
        this.state = {
            "toggles": new Array(props.answers.length).fill(false)
        };
    }
    onChange(idx){
        if(this.props.formType === "radio"){
            return function(){
                let state = this.state;
                state.toggles = new Array(this.props.answers.length).fill(false);
                state.toggles[idx] = true;
                this.setState(state);
            }
        }
        if(this.props.formType === "multiselect"){
            return function(){
                let state = this.state;
                state.toggles[idx] = !state.toggles[idx];
                this.setState(state);
            }
        }
    }
    
    doValues(){
        let property = this.props.property;
        let value;
        if(this.props.formType === "multiselect"){
            value = [];
            for(let i = 0;i<this.state.toggles.length;i++){
                if(this.state.toggles[i]){
                    value.push(this.props.answers[i].val);
                }
            }
        }
        if(this.props.formType === "radio"){
            value = this.props.answers[this.props.answers.length-1].val;
            for(let i = 0;i<this.state.toggles.length;i++){
                if(this.state.toggles[i]){
                    value = this.props.answers[i].val;
                }
            }
        }
        this.props.handleChange(property,value);
    }
    render(){
        const answerElems = this.props.answers.map((answer,idx) => {
            return <button onClick={this.onChange(idx).bind(this)} key={idx} className={"button"  + (this.state.toggles[idx] ? " is-primary" : "")}>{answer.text}</button>
        });
        return (<div className="form">
            <p className="title">{this.props.question}</p>
            {answerElems}
            <div className="control">
                <button className="button is-primary" onClick={this.doValues.bind(this)}>Continue</button>
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
    ]} handleChange={props.handleChange}/>
  }
  if(data.questionNumber === 1){
    formState = <Question question="What software do you want to make?" formType="multiselect" property="projectInterest" answers={[
        new Answer("Games","game"),
        new Answer("Websites","website"),
        new Answer("Servers","server"),
        new Answer("Data visualizations","data-visualization"),
        new Answer("Data structures and algorithms","data-structures-algorithms")
    ]} handleChange={props.handleChange}/>
  }
  if(data.questionNumber === 2){
    formState = <Question question="How do you learn best?"formType="multiselect" property="learningType" answers={[
        new Answer("Hands-on","hands-on"),
        new Answer("Courses","courses"),
        new Answer("Reading","reading"),
        new Answer("Video","video")
    ]} handleChange={props.handleChange}/>
  }
  if(data.questionNumber === 3){
    formState = <Question question="What type of language do you want to learn?" formType="multiselect" property="level" answers={[
        new Answer("Block coding","block-coding"),
        new Answer("High-level","high-level"),
        new Answer("Low-level","low-level")
    ]} handleChange={props.handleChange}/>
  }
  return (
    <div className="box">
      {formState}
    </div>
  );
}

export default Form;
