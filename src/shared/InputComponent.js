import React, { useEffect, useState } from 'react'

const InputComponent = ({ onButtonCkick, defaultValue }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {
    setInputValue(defaultValue)
  }, [defaultValue])

  const onButtonClickHandler = () => {
    onButtonCkick(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <input
        type='text'
        placeholder='type here...'
        value={inputValue}
        onChange={onInputChangeHandler}
      />
      <button onClick={onButtonClickHandler}>{defaultValue?'update' : 'add'}Todo</button>
    </div>
  )
}

export default InputComponent