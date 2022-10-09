import React from 'react';
import './css/style.css';
import Form from './Form.js';
import Results from './Results.js';
import Homepage from './Homepage.js';

class App extends React.Component{
  reset(){
    this.setState({
      "questionNumber":-1,
      "projectInterest":undefined,
      "learningType":undefined,
      "level":undefined
    })
  }
  continue(){
    let state = this.state;
    console.log(state);
    state["questionNumber"]++;
    this.setState(state);
  }
  back(){
    let state = this.state;
    console.log(state);
    state["questionNumber"]--;
    this.setState(state);
  }
  handleChange(property,value) {
    let state = this.state;
    state[property] = value;
    this.setState(state);
    console.log(state);
  }
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      "questionNumber":-1,
      "projectInterest":undefined,
      "learningType":undefined,
      "level":undefined
    }
  }
  render(){
    let content;
    if(this.state.questionNumber === -1){
      content = <Homepage continue={this.continue}/>
    }
    else if(this.state.questionNumber <= 2){
      content = <Form data={this.state} handleChange={this.handleChange} continue={this.continue} back={this.back}/>;
    } else{
      content = <Results data={this.state} reset={this.reset}/>
    }
    return content;
  
  }
}

export default App;
