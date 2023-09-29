import React from 'react'

const Button = ({onClick, btnText}) => {
  return (
    <div>
      <button onClick={onClick}>{btnText}</button>
    </div>
  )
}

export default Button