import React, { useEffect, useState } from 'react'

const Form = ({ addStudentList, updateStudent, findSearch }) => {
  const initialState = { id: null, fname: '', lname: '', email: '', age: '' }
  const [userInput, setUserInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  useEffect(() => {
    setUserInput(updateStudent)
  }, [updateStudent])

  const addFormData = (e) => {
    e.preventDefault();
    if (!userInput.fname || !userInput.email) return
    addStudentList(userInput);
    setUserInput(initialState)
  }
  console.log(userInput);

  const searchInput=(e)=>{
    findSearch(e)
  }

  return (
    <>
      <form>
        <label>First Name</label>
        <input
          type='text'
          name='fname'
          value={userInput.fname}
          onChange={handleChange}
        />
        <br></br>
        <label>Last name</label>
        <input
          type='text'
          name='lname'
          value={userInput.lname}
          onChange={handleChange}
        />
        <br></br>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={userInput.email}
          onChange={handleChange}
        />
        <br></br>
        <label>Age</label>
        <input
          type='number'
          name='age'
          value={userInput.age}
          onChange={handleChange}
        />
        <button onClick={addFormData}>Submit</button>
      </form>

      <input type='search' placeholder='search' onChange={searchInput}/>
    </>
  )
}

export default Form