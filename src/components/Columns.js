import React from 'react'

export default function Columns() {
  const items = [
    {
      id:1,
      title:'Harry Potter'
    },{
      id:2,
      title:'Lord of Rings'
    }
  ]
  /*Fragments if shorthanded do not allow to pass the key attribute */
  return (
    <>
      <td>Name</td>
      <td>Jane Doe</td>
    </>
  )
}
