import React from 'react'
import Button from './Button'

const Table = ({ list }) => {
  return (
    <div>
      <table style={{ width: 100 }}>
        <tr>
          <th>S.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gmail</th>
          <th>Mobile No</th>
        </tr>
        <tbody>
            {
              list
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table