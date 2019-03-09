import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default User
