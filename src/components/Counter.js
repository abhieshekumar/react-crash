import React, { Component } from 'react'

class Counter extends Component{

  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  /*Pass function as parameter is update of state depends on previous state */
  increment(){
    this.setState((prevState, props) => ({
      count: prevState.count+1
    }))
  }

  /*React Groups Multiple call to set state into a single update for better performance */
  incrementThree(){
    this.increment()
    this.increment()
    this.increment()
  }

  render(){
    return(
      <div>
        <div>Count - { this.state.count }</div>
        <button onClick={() => this.incrementThree()}>Increment</button>
      </div>
    )
  }
}

export default Counter