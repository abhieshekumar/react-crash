import React, { Component } from 'react'
import updatedComponent from './WithCounter'

class HoverCounter extends Component {

  render() {
    console.log(this.state.props) //undefines
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h1>
      </div>
    )
  }
}

export default updatedComponent(HoverCounter)
