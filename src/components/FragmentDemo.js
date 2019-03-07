import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
    {/*Allows to return multiple elements from render which other wise are wrapped in a single parent component*/}
      <h1>
        Fragment Demo
      </h1>
      <p>
        This is a description of Demo
      </p>
    </React.Fragment> 
  )
}

export default FragmentDemo
