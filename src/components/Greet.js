import React from 'react'

/* Greet() defines a Functional Component*/
/* Props - receives the property*/
const Greet = ({name, hero}) => { /*DESTRUCTURING */
  return (
    <div> {/* Only one element is returned sowe wrap everything inside a Div tag */}
      <h1>Welcome to React - { name } - { hero }</h1>
    </div>
    )
}


/* The component is not connected to rest of our application 
   So, let's connect it by Exporting it from Greet.js then Import it in App.js
   and then include it in App Component
*/

export default Greet