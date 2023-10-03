import React, { useState } from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';


const UserInput = ({ changeValue, secondChangeValue, clear }) => {
  const [userInput, setUserInput] = useState("");
  const [lastName, setLastName] = useState("");

  const onChangeHandler = (e) => {
    setUserInput(e.target.value)
    changeValue(e.target.value)
  }
const onChangeSecondName=(e)=>{
  setLastName(e.target.value)
  secondChangeValue(e.target.value)

}

  const onClear = () => {
    setUserInput("");
    setLastName("")
    clear()
  }
  console.log(userInput);
  return (
    <div>
      <label>First Name</label>
      <Input
        type={'text'}
        value={userInput}
        onChange={onChangeHandler}
      />
      <label>Last Name</label>
      <Input
      type={'text'}
      value={lastName}
      onChange={onChangeSecondName}
      />
      <Button onClear={onClear} />
    </div>
  )
}

export default UserInput