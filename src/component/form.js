import React, { useState } from 'react'

const Form = () => {
  const [input, setInput] = useState({ id: null, username: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  console.log(input);
  const addData = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={
        event=>{
          event.preventDefault();
        }
      }>
        <label>First Name</label>
        <input
          type='text'
          name='username'
          value={input.username}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={input.email}
          onChange={handleInputChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form;