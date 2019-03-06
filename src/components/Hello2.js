import React from 'react'

const Hello2 = () => {
  /*return React.createElement('div', null, '<h1>Not using JSX</h1>')
  Notice the output in browser H1 is not treated as DOM Node*/
  return React.createElement('div', null, React.createElement('h1',null,'Not using JSX'))
}

export default Hello2