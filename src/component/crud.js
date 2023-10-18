import React, { useState } from 'react'
import Form from '../shared/form'
import TableComponent from '../shared/tableComponent';
const studentInformation = [
  { id: 1, fname: 'ilaya', lname: 'raja', email: 'ilaya@gmail.com', age: '29' },
  { id: 2, fname: 'jancy', lname: 'rani', email: 'thanya@gmail.com', age: '29' },
]
const Crud = () => {


  const [studentList, setStudentList] = useState(studentInformation);
  const [updateStudent, setUpdateStudent] = useState({})
  console.log(studentList);

  const addStudentList = (val) => {
    if (updateStudent.id) {
      // debugger;
      const findIndex = studentList.findIndex((item) => item.id === updateStudent.id)
      console.log(findIndex);
      studentList[findIndex] = val;
      setStudentList([...studentList])
    } else {
      val.id = studentList.length + 1;
      setStudentList([...studentList, val])
      console.log(val);
    }

  }

  const editStudent = (id) => {
    const res = studentList.findIndex((item) => item.id === id)
    const result = studentList[res]
    setUpdateStudent(result);
  }
  console.log(updateStudent);


  const deleteStudent = (id) => {
    const find = studentList.filter((item) => item.id !== id)
    setStudentList(find);
    console.log(find);
  }
  return (
    <>
      <Form addStudentList={addStudentList} updateStudent={updateStudent} />
      <TableComponent data={studentList} deleteStudent={deleteStudent} editStudent={editStudent} />
    </>
  )
}

export default Crud