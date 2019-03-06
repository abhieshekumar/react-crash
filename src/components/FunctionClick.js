import React from 'react'

function FunctionClick(){

  function clickHandler(){
    console.log('Button Clicked')
  }

  return(
    <div>
      {/*Handler is not a function call. If you do so the message is already logged as function is called and nothing happens on click */}
      <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick