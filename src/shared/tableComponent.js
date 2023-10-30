import React from 'react';
import './table.css';

const TableComponent = ({ data, deleteUserList, removeUserList }) => {
  const deleteItem=(id)=>{
    deleteUserList(id);
  }

const editUserList=(id)=>{
  removeUserList(id);
}

  return (
    <div >
      <table className='table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Job</th>
            <th>location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ?(
              data.map((item)=>(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{item.location}</td>
                  <td>
                    <button onClick={()=>editUserList(item.id)}>Edit</button>
                    <button onClick={()=>deleteItem(item.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ):(
              <tr>
                <td colSpan={3}>No data</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent