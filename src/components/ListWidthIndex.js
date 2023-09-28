import React, { useState } from 'react'
import InputComponent from '../shared/InputComponent'
import OutputComponent from '../shared/OutputComponent'

const ListWidthIndex = () => {
  const [list, setList] = useState([]);
  const [defaultValue, setDefaultValue] = useState({ value: '', index: null })

  const onButtonCkick = (val) => {
     debugger;
    if (defaultValue.value !== '') {
        const findInd =list.findIndex((item)=>item === defaultValue.value)
        console.log(findInd);
        list[findInd]=val 
        setList([...list])
        setDefaultValue({value: '', index: null})
    } else {
      setList([...list, val])
    }
  }

  const onEdit = (val) => {
    const index = list.findIndex((item) => item === val)
    const res = list[index]
    setDefaultValue({ value: res, index: list.length })
  }

  const onDelete = (val) => {
    const res = list.filter((item) => item !== val)
    setList(res)
  }

  return (
    <div>
      <InputComponent
        onButtonCkick={onButtonCkick}
        defaultValue={defaultValue.value}
      />
      <OutputComponent
        list={list}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  )
}

export default ListWidthIndex