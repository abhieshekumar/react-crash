import React, { Component } from 'react'
import updatedComponent from './WithCounter'

class ClickCounter extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>Clicked {this.props.count} times {this.props.name}</button>
      </div>
    )
  }
}

export default updatedComponent(ClickCounter,5)
