import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  
  //this methods makes component error boundary
  static getDerivedStateFromError(error){
    return{
      hasError: true
    }
  }

  componentDidCatch(error,info){
    /* Information related to the error in info - used to log the error */
    console.log(info)
    console.log(error)
  }

  render() {
    if(this.state.hasError){
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
