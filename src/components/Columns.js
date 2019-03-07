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
  return (
    <React.Fragment>
      {
        items.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Jane Doe</td>
    </React.Fragment>
  )
}
