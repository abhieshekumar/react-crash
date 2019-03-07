import React, { Component } from 'react'

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    
    this.inputRef = React.createRef() //Step 1
  }
  
  componentDidMount() {
    this.inputRef.current.focus() //Focussed on input element
    console.log(this.inputRef)
  }

  render() {
    return (
      <div>
        {/*We want to focus on text tab
          
          Step 1 Create a ref
          Step 2 Attach Ref  - using ref attribute
          Step 3 Call focus method
        */}
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default RefsDemo
