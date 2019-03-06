import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Bruce',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue.js'
    }
  ]
  /*Key prop are special - They are not accessible in CHILD component - Key prop is reserved - Do not use it to render any 
  data - It helps react to handle UI updates efficiently */

  const names = ['Bruce','Clark','Diana','Bruce']

  /*Arrow function takes two value index and name which solves Key problem*/
  const nameList = names.map((name,index) => <h2 key={index}>{name}</h2> )
  return (
    <div>{ nameList }</div>
  )
}

export default NameList
