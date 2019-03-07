import React, { Component } from 'react'
import { timingSafeEqual } from 'crypto';

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    
    this.inputRef = React.createRef() //Step 1

    //Call backRef approach
    this.cbRef = null //create a property
    this.setCbRef = ( element ) => {  //create a method that assigns property with a DOM element
      this.cbRef = element
    }
  }
  
  componentDidMount() {
    //this.inputRef.current.focus() Focussed on input element
    //console.log(this.inputRef)

    /*
      Code for new callback ref
        React will call the ref callback with the DOM element when the component mounts and call it with NULL when it unmounts. So check if value exists on reference property
    */
    if(this.cbRef){
      this.cbRef.focus()  //DOM node is directly accessed as opposed to previous one
    }
  }

  clickHandler = () => {
    console.log(this.inputRef.current.value)
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
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
