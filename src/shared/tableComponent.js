import React, { useState } from 'react';
import './table.css';

const TableComponent = ({ data, deleteStudent, editStudent, findSearch, findGmail, findLastName, findAge }) => {
  const [orderBy, setOrderBy] = useState("ASC");
  const [datas, setData]=useState(data);

  const shorting = (col) => {
    if(orderBy==="ASC"){
      const sorted = [...datas].sort((a,b)=>
      a[col] > b[col] ? 1: -1
      )
      setOrderBy("DES")
      setData(sorted)
    }else{
      const sorted = [...datas].sort((a,b)=>
      a[col] < b[col] ? 1: -1
      )
      setOrderBy("ASC")
      setData(sorted)
    }
    
  }

  console.log(data);

  const onDelete = (id) => {
    deleteStudent(id)
    console.log(id);
  }

  const onEdit = (id) => {
    editStudent(id)
  }

  const searchInput = (e) => {
    findSearch(e)
  }
  const searchGmail = (e) => {
    findGmail(e)
  }
  const searchLastName = (e) => {
    findLastName(e)
  }

  const searchAge = (e) => {
    findAge(e)
  }

  const applayingShort = (a, b) => {

  }

  return (
    <>

      <label>First Name Filter</label>
      <input type='search' placeholder='search' onChange={searchInput} />

      <label>Last Name Filter</label>
      <input type='text' onChange={searchLastName} />

      <label>email Filter</label>
      <input type='text' placeholder='email' onChange={searchGmail} />

      <label>Age Filter</label>
      <input type='text' onChange={searchAge} />

      <table className='table'>
        <thead>
          <tr>
            <th onClick={()=>shorting('id')}>S.No</th>
            <th onClick={() => shorting('name')}> First Name</th>
            <th onClick={()=>shorting('lname')}>Last Name</th>
            <th onClick={()=>shorting('email')}>Email</th>
            <th onClick={()=>shorting('age')}>Age</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>
          {
            datas.length > 0 ? (
              datas.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => onEdit(item.id)}>Edit</button>
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))

            ) : (
              <tr>
                <td colSpan={3}>No Data</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default TableComponent;