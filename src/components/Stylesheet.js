import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary':''
  return (
    <div>
      <h1 className={className}>StyleSheets</h1>
    </div>
  )
}

export default Stylesheet
