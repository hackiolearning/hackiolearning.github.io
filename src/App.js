import React from 'react';
import './css/style.css';
import Form from './Form.js';

class App extends React.Component{
  handleChange(property,value) {
    let state = this.state;
    state[property] = value;
    state["questionNumber"]++;
    this.setState(state);
    console.log(this.state);
  }
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      "questionNumber":0,
      "hasExperience":undefined,
      "projectInterest":[],
      "learningType":[],
      "level":[]
    }
  }
  render(){
    return <>
    <p>Form should appear below this</p>
      <Form data={this.state} handleChange={this.handleChange}/>
    </>
  }
}

export default App;
