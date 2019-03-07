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
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css' //importing module CSS
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'

class App extends Component {
  render() {
    /* If there is no content between the tag <Greet></Greet> we may change it to a self closing tag */
    return (
      <div className="App">
        <LifecycleA/>
      </div>
    );
  }
}

export default App;
