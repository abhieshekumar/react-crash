import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'  /* You may omit the .js extension */

class App extends Component {
  render() {
    /* If there is no content between the tag <Greet></Greet> we may change it to a self closing tag */
    return (
      <div className="App">
        <Greet/>
      </div>
    );
  }
}

export default App;
