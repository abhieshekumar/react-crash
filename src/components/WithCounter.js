//CREATING HOC

import React from 'react'

const updatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    incrementCount = () => {
      this.setState(prevState => {
        return {count: prevState.count + incrementNumber}
      })
    }

    render(){
      console.log(this.props.name) /*Props are passed to the HOC not the component */
      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {... this.props}/> //Spread Operator - pass down the rest of the props
    }
  }
  return NewComponent
}

export default updatedComponent