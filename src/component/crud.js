import React, { useState } from 'react'
import Form from './form'

const Crud = () => {
  const [arrayValue, setArrayValue] = useState([])
  return (
    <div>
      <Form />
    </div>
  )
}

export default Crud