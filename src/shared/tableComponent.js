import React from 'react'

const TableComponent = ({ data, deleteStudent, editStudent }) => {
  console.log(data);

  const onDelete=(id)=>{
    deleteStudent(id)
    console.log(id);
  }

  const onEdit=(id)=>{
    editStudent(id)
    }
  return (
    <>
      <table style={{border:2}}>
        <thead>
          <tr>

            <td>S.No</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>

        </thead>
        <tbody>
          {
            data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={()=>onEdit(item.id)}>Edit</button>
                    <button onClick={()=>onDelete(item.id)}>Delete</button>
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