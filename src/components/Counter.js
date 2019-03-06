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

  render(){
    return(
      <div>
        <div>Count - { this.state.count }</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter