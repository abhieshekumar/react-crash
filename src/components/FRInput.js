import React from 'react'

/*function FRInput() {
  return (
    <div>
      <input type="text"/>
    </div>
  )
}*/

//STEP 3 : Forwarding is achieved using forward ref method from React library
//React.forwardRef() takes a component as parameter

/*
Every functional component receives props as it's parameter

But, if component is passed as parameter to ref method, it receives ref attribute as it's second parameter. 
*/

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* Ref is forwarded here */}
      <input type="text" ref={ref}/>
    </div>
  )
})

export default FRInput
