import React, { Component } from 'react'
import RegularComponent from './RegularComponent';
import PureComp from './PureComp';

/*The Regular Component does not implement the shouldComponentUpdate method. It always return true by default*/

/*
A Pure Component implements shouldComponentUpdate with shallow props and state comparison
*/

/*
Shallow Comparison
  Primitive Types
    a SC b is TRUE if a and b have same value and are of dame type
  
  Complex Types
    a SC b returns TRUE if a and b reference the same object

    var a = [1,2,3]
    var b = [2]
    var c = a

    a SC b is FALSE
    a SC c is TRUE
*/

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Jane Doe'
    }
  }
  
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name: 'Jane Doe' //NO CHANGE IN VALUE
      })
    },2000)
  }

  render() {
    console.log(`Parent Comp Render`)
    return (
      <div>
        Parent Component
        <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
