import React from 'react'

/*Breaking out */
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
      <h1>Portals Demo</h1>,
      document.getElementById('portal-root')
  )
}

//1st parameter is JSX, 2nd para is DOM node to mount on

export default PortalDemo
