import React, { Component } from 'react'  //we need two things here React and Component class

class Welcome extends Component {             //extend
  render() { 
    const { name , hero } = this.props                                 //return null or nothing
    return <h1>Class Component - {name} - { hero } </h1>
  }
}

export default Welcome