import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import Table from '../../shared/Table'

const UserCrud = () => {
 
  return (
    <div>
      <RegisterForm />
      <Table />
    </div>
  )
}

export default UserCrud