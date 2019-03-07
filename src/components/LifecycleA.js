import React, { Component } from 'react'

class LifecycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Jane Doe'
    }
    console.log("LifecycleA constructor")
  }

  static getDerivedStateFromProps(props,state){
    //it returns NULL or new State
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  
  componentDidMount() {
    console.log('LifecycleA Mount')
  }

  render() {
    console.log('LifecycleA Render')
    return (
      <div>
        LifeCycleA - See console for order of execution
      </div>
    )
  }
}

export default LifecycleA
