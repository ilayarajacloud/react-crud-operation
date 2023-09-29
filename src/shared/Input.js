import React, { useState } from 'react'

const Input = ({type, onChange, defaultValue, placeholder}) => {
  const [value, setValue] = useState("")
  const onClickHandler = (e) => {
      setValue(e.target.value);
      onChange(e.target.value);
      // setValue('');
  }
  console.log(value);
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onClickHandler}
      />
    </div>
  )
}

export default Input