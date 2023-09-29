
import React, { useState } from 'react'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

const RegisterForm = () => {
  const [formValue, setFormValue] = useState({})

  const onChangeInputValue=(name, val)=>{
    setFormValue({...formValue, [name]:val});
  }
  return (

    <>
    
        <label>FirstName</label>
         <Input  
          type={'text'}
          defaultValue={formValue.fname}
          onChange={(value) => onChangeInputValue('fname', value)}
        />
        <label>LastName</label>
        <Input
          type={'text'}
          defaultValue={formValue.lname}
          onChange={(value) => onChangeInputValue('lname', value)}
        />
        <label>Age</label>
        <Input
          type={'number'}
          defaultValue={formValue.age}
          onChange={(value) => onChangeInputValue('age', value)}
        />
        <label>Gmail</label>
        <Input
          type={'email'}
          defaultValue={formValue.email}
          onChange={(value)=> onChangeInputValue('email', value)}
        />
        <label>Mobile No</label>
        <Input 
        type={'number'}
        defaultValue={formValue.mobile}
        onChange={(value)=> onChangeInputValue('mobile', value)}
        />
        <Button 
        // onClick={addUserData}
        // btnText={"Add Data"}
         />
         
    </>
  )
}

export default RegisterForm


























// import React, { useState } from 'react'
// import Input from '../../shared/Input'
// import Button from '../../shared/Button'

// const RegisterForm = ({getUserList}) => {
//   const [formValue, setFormValue] = useState({});
//   const [userList, setUserList] = useState([]);


//   const onChangeInputValue = (name, value) => {
//     setFormValue({ ...formValue, [name]: value })
//   }

//   const addUserData=(e)=>{
//     setUserList([...userList, {...formValue}]);
//     getUserList(userList)
//     console.log(userList);
//   }

//   console.log(formValue);
//   return (
//     <>
    
//         <label>FirstName</label>
//         <Input
//           type={'text'}
//           placeholder={"fname"}
//           name="fname"
//           defaultValue={formValue.fname}
//           onChange={(value) => onChangeInputValue('fname', value)}
//         />
//         <label>LastName</label>
//         <Input
//           type={'text'}
//           name='lname'
//           defaultValue={formValue.lname}
//           onChange={(value) => onChangeInputValue('lname', value)}
//         />
//         <label>Age</label>
//         <Input
//           type={'number'}
//           name='age'
//           defaultValue={formValue.age}
//           onChange={(value) => onChangeInputValue('age', value)}
//         />
//         <label>Gmail</label>
//         <Input
//           type={'email'}
//           name="email"
//           defaultValue={formValue.email}
//           onChange={(value)=> onChangeInputValue('email', value)}
//         />
//         <label>Mobile No</label>
//         <Input 
//         type={'number'}
//         name='mobile'
//         defaultValue={formValue.mobile}
//         onChange={(value)=> onChangeInputValue('mobile', value)}
//         />
//         <Button 
//         onClick={addUserData}
//         btnText={"Add Data"}
//          />
         
//     </>
//   )
// }

// export default RegisterForm