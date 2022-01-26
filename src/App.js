import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends Component {

  state = {
    age: 31
  }

  addOneYear = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <MyComponent age={this.state.age}/>
        <button onClick={this.addOneYear}>Changer le props</button>
      </div>
    );
  }

}

export default App;
