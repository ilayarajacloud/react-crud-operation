import React, { useState } from 'react'
import InputComponent from '../shared/InputComponent'
import OutputComponent from '../shared/OutputComponent'

const ListWithId = () => {
  const [list, setList] = useState([]);
  const [defaultValue, setDefaultValue] = useState({ value: '', id: '' })

  const onButtonCkick = (val) => {
    if (val === "") {
      alert("please entere value...")
    } else {
      if (defaultValue.value !== "") {

        const index = list.findIndex((item) => item.value === defaultValue.value)
        list[index].value = val
        setList([...list])
        setDefaultValue({ value: '', id: '' })
      } else {
        setList([...list, { value: val, id: list.length + 1 }])
      }
    }

  }
  console.log(list);

  const onEdit = (val) => {
    console.log(val);
    const index = list.findIndex((item) => item.value === val)
    const res = list[index]
    console.log(res);
    setDefaultValue({ value: res.value, id: res.id })

  }
  console.log(list);
  // const defaults = defaultValue.map((item)=>{
  //   return item.value
  // })
  const onDelete = (val) => {
    console.log(val);
    const res = list.filter((item) => item.value !== val)
    setList(res);
  }

  return (
    <div>
      <InputComponent
        onButtonCkick={onButtonCkick}
        defaultValue={defaultValue.value}
      />
      <OutputComponent
        list={list.map((item) => {
          return item.value
        })}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  )
}

export default ListWithId