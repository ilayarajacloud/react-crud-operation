import React from 'react'

const Output = ({ todo, onDeleteTodo, onEditTodo }) => {
  console.log(todo);

  const onDelete=(index)=>{
    onDeleteTodo(index);
    console.log(index);
  }

  const onEdit=(todo)=>{
    onEditTodo(todo)
    console.log(todo);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Todo List</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index}</td>
                <td>{todo.text}</td>
                <td>
                  <button onClick={()=>onEdit(todo)}>Edit</button>
                  <button onClick={()=>onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}


export default Output