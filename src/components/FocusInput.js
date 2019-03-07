import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {

  constructor(props) {
    super(props)
    this.componentRef = React.createRef() //Create a ref

  }
  
  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>{/*Attach */}
        <button onClick={this.clickHandler}>Focus Input</button>
        <p>If we click on this button the input of child component receives focus</p>
      </div>
    )
  }
}

export default FocusInput
