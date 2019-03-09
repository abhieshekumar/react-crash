import React, { Component } from 'react'

class HoverCounter2 extends Component {

  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h1>
      </div>
    )
  }
}

export default HoverCounter2