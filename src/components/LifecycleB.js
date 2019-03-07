import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Jane Doe'
    }
    console.log("LifecycleB constructor")
  }

  static getDerivedStateFromProps(props,state){
    //it returns NULL or new State
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }
  
  componentDidMount() {
    console.log('LifecycleB Mount')
  }

  render() {
    console.log('LifecycleB Render')
    return (
      <div>
        LifecycleB - See console for order of execution
      </div>
    )
  }
}

export default LifecycleB
