import React, { useState } from 'react'
import TableComponent from '../shared/tableComponent'
import Form from '../shared/form'

const Crud = () => {
  const initalState = [
    { id: 1, name: 'ilaya', job: 'professional', location: 'bangalor' },
    { id: 2, name: 'raja', job: 'professional', location: 'koimbatur' },
    { id: 3, name: 'nana', job: 'deman', location: 'kerala' },
    { id: 4, name: 'nun', job: 'gost', location: 'hydrabad' },
  ]
  const [userList, setUserList] = useState(initalState);
  const [update, setUpdate] = useState("")

  const removeUserList = (id) => {
    const result = userList.findIndex((item) => item.id === id)
    const res = userList[result]
    setUpdate(res);
  }

  const addUserList = (val) => {
    debugger;
    console.log(val);
    if (update.id) {
     const find=userList.findIndex((item)=>item.id===update.id)
     userList[find] =val;
     setUserList([...userList])
    } else {
      val.id = userList.length + 1;
      setUserList([...userList, val])
    }
  }

  const deleteUserList = (id) => {
    const result = userList.filter((item) => item.id !== id)
    setUserList(result);
  }

  return (
    <>
      <TableComponent data={userList} deleteUserList={deleteUserList} removeUserList={removeUserList} />
      <Form addUserList={addUserList} update={update} />
    </>
  )
}

export default Crud