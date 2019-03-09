import React, { Component } from 'react'
import { UserConsumer } from './userContext';

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        { 
          /*The function gets the usercontext value as it's parameter*/
          (username) => {
            return <div>Hello {username}</div>
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
