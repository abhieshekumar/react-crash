import React, { Component } from 'react'

class Message extends Component {

  //STEP 1 : define the state 
  constructor(){
    super() //required as we have extended Component class, so we need to call base class constructor
    this.state = {
      message: 'Welcome visitor'
    }
  }

  /*STEP 4 : Function - setState changes the state of an object. Accepts an object corresponding to new state of the object*/
  changeMessage(){
    this.setState({
      message : 'Thank you for subscribing'
    })
  }


  render(){
    return(
      <div>
        {/* STEP 2 : Bind the state value in the render function */}
        <h1>{ this.state.message }</h1>
        <button onClick = { () => this.changeMessage() }>Subscribe</button> {/* STEP 3 : Add event to button and add a handler to it */}
      </div>
    )
  }
}
export default Message