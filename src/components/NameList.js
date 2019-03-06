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
  /*
  PROBLEM with index as KEY
    have items with key,value pair as (0,1)(1,2)(2,3)
    if you insert at beginning then that element gets the INDEX of    ZERO which is bad for react interpretation

    ALSO this is a problem with SORTING

    You may have index as key if :
      - you do not have unique id
      - list is static (no add/delete)
      - list will never be reordered or filtered
  */

  const names = ['Bruce','Clark','Diana','Bruce']

  /*Arrow function takes two value index and name which solves Key problem*/
  const nameList = names.map((name,index) => <h2 key={index}>{name}</h2> )
  return (
    <div>{ nameList }</div>
  )
}

export default NameList
