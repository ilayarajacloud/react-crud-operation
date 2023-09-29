import React, { useEffect, useState } from 'react'

const Input = ({type, onChange, defaultValue, }) => {
  const [value, setValue] = useState("")
  const onClickHandler = (e) => {
      setValue(e.target.value);
      onChange(e.target.value);
  }

  // useEffect(()=>{
  //   setValue(defaultValue)
  // },[defaultValue])

  console.log(value);
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onClickHandler}
      />
    </div>
  )
}

export default Input