import React, { Component } from 'react'

class Counter extends Component{

  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  increment(){
    this.setState({
      count : this.state.count+1
    },
    () => {
      console.log(this.state.count) //Async nature of setState
      }
    )
  }

  /*React Groups Multiple call to set state into a single call for better performance */
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