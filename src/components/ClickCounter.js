import React, { Component } from 'react'
import updatedComponent from './WithCounter'

class ClickCounter extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default updatedComponent(ClickCounter)
