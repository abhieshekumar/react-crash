import React from 'react'

const Hello2 = () => {
  /*return React.createElement('div', null, '<h1>Not using JSX</h1>')
  
  Notice the output in browser H1 is not treated as DOM Node
  
  return React.createElement('div', null, React.createElement('h1',null,'Not using JSX'))*/

  /*The Second Parameter is key-value pair applied to the object */
  return React.createElement('div',{id: 'hello', className:'SomeClass'}, React.createElement('h1',null,'Not using JSX'))

  /*The console displays an error as 'class' is a reserved JS word so change it to className */
}

export default Hello2