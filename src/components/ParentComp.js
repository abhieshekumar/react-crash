import React, { Component } from 'react'
import RegularComponent from './RegularComponent';
import PureComp from './PureComp';

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
