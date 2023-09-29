import React, { useState } from 'react'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

const RegisterForm = ({getUserList}) => {
  const [formValue, setFormValue] = useState({});
  const [userList, setUserList] = useState([]);

  const onChangeInputValue = (name, value) => {
    setFormValue({ ...formValue, [name]: value })
  }

  const addUserData=(e)=>{
    debugger;
    setUserList([...userList, {...formValue}]);
    getUserList(userList)
    setFormValue({});
  }

  console.log(userList);
  console.log(formValue);
  return (
    <>
    
        <label>FirstName</label>
        <Input
          type={'text'}
          placeholder={"fname"}
          name="fname"
          value={formValue.fname}
          onChange={(value) => onChangeInputValue('fname', value)}
        />
        <label>LastName</label>
        <Input
          type={'text'}
          placeholder={"lname"}
          name='lname'
          value={formValue.lname}
          onChange={(value) => onChangeInputValue('lname', value)}
        />
        <label>Age</label>
        <Input
          type={'number'}
          placeholder={"age"}
          name='age'
          value={formValue.age}
          onChange={(value) => onChangeInputValue('age', value)}
        />
        <label>Gmail</label>
        <Input
          type={'email'}
          placeholder={'email'}
          name="email"
          value={formValue.email}
          onChange={(value)=> onChangeInputValue('email', value)}
        />
        <label>Mobile No</label>
        <Input 
        type={'number'}
        placeholder={'mobile'}
        name='mobile'
        value={formValue}
        onChange={(value)=> onChangeInputValue('mobile', value)}
        />
        <Button 
        onClick={addUserData}
        btnText={"Add Data"}
         />
         
    </>
  )
}

export default RegisterForm