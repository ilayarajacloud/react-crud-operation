import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import Table from '../../shared/Table'

const UserCrud = () => {
  const [arryList, setArryList]=useState([])
  const getUserList=(val)=>{
    console.log(val);
    setArryList(val);
  }
  console.log(arryList);
  return (
    <div>
      <RegisterForm getUserList={getUserList}/>
      <Table list={arryList.map((item)=>{
        return(
          <tr>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
          </tr>
        )
      })}/>
    </div>
  )
}

export default UserCrud