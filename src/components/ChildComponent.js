import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/*Passing parameter to Parent Component */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
