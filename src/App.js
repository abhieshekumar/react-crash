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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComponent from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext';
/**
 * Steps to create the context
 * 
 * Create the context
 * Proveide a context value
 * Consume the context value
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*STEP 2 : 
        
          Only decendant can consume it. 
          
          Provider component is responsible to provide value to all the decendant components.  use "value" attribute .
          
          The value of 'value' can be used by component C or component nested
        */}
        <UserProvider value="Name">
          <ComponentC/>
        </UserProvider>
      </div>  
    );
  }
}

export default App;
