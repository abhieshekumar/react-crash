import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

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
  
  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshoBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate')
  }

  componentDidMount() {
    console.log('LifecycleA Mount')
  }

  changeState = () => {
    this.setState({
      name: 'Evaluation'
    })
  }

  render() {
    console.log('LifecycleA Render')
    return (
      <div>
        LifeCycleA - See console for order of execution
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
