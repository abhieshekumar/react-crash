import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'  /* You may omit the .js extension */
import { Greeting } from './components/GreetNamed' // for the named functional conponent
import Welcome from './components/Welcome'  //Class Component
import Hello from './components/Hello' //JSX Version of component
import Hello2 from './components/Hello2' //JSX Version of component
import Message from './components/Message' //for state of component
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

class App extends Component {
  render() {
    /* If there is no content between the tag <Greet></Greet> we may change it to a self closing tag */
    return (
      <div className="App">
        <ClassClick/>
      </div>
    );
  }
}

export default App;
