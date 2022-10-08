import React from 'react';
import './css/style.css';
import Form from './Form.js';

class App extends React.Component{
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
    this.state = {
      "questionNumber":0,
      "hasExperience":undefined,
      "projectInterest":undefined,
      "learningType":undefined,
      "level":undefined
    }
  }
  render(){
    return <>
    <p>Form should appear below this</p>
      <Form data={this.state} handleChange={this.handleChange} continue={this.continue} back={this.back}/>
    </>
  }
}

export default App;
