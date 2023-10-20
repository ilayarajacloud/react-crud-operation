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
  const [filterData, setFilterData] = useState('');
  const [filterGmail, setFilterGmail] = useState('');
  const [filterLastName, setFilterLastName] = useState("");
  const [filterAge, setFilterAge] = useState('');

  console.log(studentList);

  const findSearch = (e) => {
    const { value } = e.target
    setFilterData(value);
  } 

  const findGmail=(e)=>{
    setFilterGmail(e.target.value)
  }

  const findLastName=(e)=>{
    setFilterLastName(e.target.value)
  }
  const findAge=(e)=>{
    setFilterAge(e.target.value)
  }
  console.log(filterAge);

  const resultData = studentList.filter((item) =>
    item.fname.toLowerCase().includes(filterData.toLowerCase())
     && item.email.toLowerCase().includes(filterGmail.toLowerCase())
     && item.lname.toLowerCase().includes(filterLastName.toLowerCase())
     && item.age.toLocaleUpperCase().includes(filterAge.toLowerCase())
  )

  // const resultData=studentList.filter((item)=>{
  //   const search = filterData.toLowerCase();
  //   return Object.values(item).some((value)=> value.toLowerCase().includes(search));
  // })

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
      <TableComponent data={resultData} deleteStudent={deleteStudent} editStudent={editStudent} findSearch={findSearch} findGmail={findGmail} findLastName={findLastName} findAge={findAge}/>
    </>
  )
}

export default Crud