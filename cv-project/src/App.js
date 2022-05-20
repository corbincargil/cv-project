import { Component } from 'react';
import './App.css';
import DisplayContainer from './components/DisplayContainer';
import InputContainer from './components/InputContainer.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      
    };
  }

  
  render() {
      return (
      <div className="App">
        <InputContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
