import React, { Component } from 'react'
import updatedComponent from './WithCounter'

class HoverCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  incrementCount = () => {
    this.setState(prevState => {
      return {count: prevState.count+1}
    })
  }

  render() {
    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>Hovered {this.state.count} times {this.props.name}</h1>
      </div>
    )
  }
}

export default updatedComponent(HoverCounter)
