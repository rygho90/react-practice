import React, { Component } from "react";
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textInput: '',
      tasks: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    this.setState({textInput: e.target.value})
  }

  handleSubmit() {
    this.state.tasks.push(this.state.textInput)
    this.setState({textInput: ''})
    console.log(this.state.tasks)
  }

  render() {
    return (
      <div>
        <h1>Hello World.</h1>
        <input type="text" onChange={this.updateInput}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <Overview taskList={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
