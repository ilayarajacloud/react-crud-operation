import React, { useState } from 'react'

const UserInput = ({changeValue, clear}) => {
  const [userInput, setUserInput] = useState("");

  const onChangeHandler=(e)=>{
    setUserInput(e.target.value)
    changeValue(e.target.value)
  }
  const onClear=()=>{
    setUserInput("");
    clear()
  }
  console.log(userInput);
  return (
    <div>
      <input
       type='text'
       value={userInput}
       onChange={onChangeHandler}
       />
       <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default UserInput