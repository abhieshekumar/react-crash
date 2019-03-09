import React, { Component } from 'react'
import FRInput from './FRInput';

class FRParentInput extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef() //Step 1 create ref in parent 

  }
  
  clickHandler = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        {/* Step 2 : Attach ref to the child component */}
        <FRInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput
