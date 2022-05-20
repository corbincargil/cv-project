import { Component } from 'react';
import './App.css';
import Overview from './components/Overview.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newTask: 'Hi',
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      newTask: e.target.value,
    });
  }

  addNewTask(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.newTask),
    })
  }
  
  render() {
      return (
      <div className="App">
        <h1>Task List Exercise</h1>
        <h2>Create Tasks Here:</h2>
        <form onSubmit={this.addNewTask}>
          <label htmlFor="getInupt">Task name:</label>
          <input type="text" name="newTask" id="getTask" onChange={this.handleChange}/>
          <button type="submit">Add</button>
          <Overview tasks={this.state.tasks}/>
        </form>
        
      </div>
    );
  }
}

export default App;
