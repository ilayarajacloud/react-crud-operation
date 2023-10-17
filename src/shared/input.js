import React, { useEffect, useState } from 'react'

const Input = ({addTodo, getValue}) => {
  const [value, setValue] = useState('');

  const handleChange=(e)=>{
    setValue(e.target.value)
  }

  useEffect(()=>{
    setValue(getValue)
  }, [getValue])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!value){
      return
    }
    addTodo(value);
    setValue('');
  }
  

  console.log(value);
  return (
    <>
      <form>
        <input
          type='text'
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </>
  )
}

export default Input