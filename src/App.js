import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'  /* You may omit the .js extension */
import { Greeting } from './components/GreetNamed' // for the named functional conponent
import Welcome from './components/Welcome'  //Class Component

class App extends Component {
  render() {
    /* If there is no content between the tag <Greet></Greet> we may change it to a self closing tag */
    return (
      <div className="App">
        <Greet/>
        <Greeting/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
