import React from 'react'
import Columns from './Columns'

/*
  Fragments can accept key attributes when rendering list of item
*/
export default function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Columns/>
        </tr>
      </tbody>
    </table>
  )
}
