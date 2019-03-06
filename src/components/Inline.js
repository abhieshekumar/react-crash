import React from 'react'

/*In react inline CSS are camelCased version of style names */

const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
