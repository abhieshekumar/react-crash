import React from 'react'

/*Breaking out */
import ReactDOM from 'react-dom'

/*HELP to Break-out of CSS of Parent */
function PortalDemo() {
  return ReactDOM.createPortal(
      <h1>Portals Demo</h1>,
      document.getElementById('portal-root')
  )
}

//1st parameter is JSX, 2nd para is DOM node to mount on

export default PortalDemo
