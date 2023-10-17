import React, { useState } from 'react'
import Output from '../shared/output'
import Input from '../shared/input'

const Todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: 'ilaya' },
    { id: 2, text: 'soft' },
  ])

  const [getValue, setGetValue] = useState('')

  const addTodo = (val) => {
     debugger;
    if (getValue.id) {
      let res = todo.findIndex((item) => item.id === getValue.id)
      todo[res].text=val;
      setTodo([...todo]);
    } else {
      setTodo([...todo, { text: val }])
    }
  }

  const onDeleteTodo = (ind) => {
    const result = todo.filter((item, index) => index !== ind);
    setTodo(result);
    console.log(result);
  }

  const onEditTodo = (todo) => {
    setGetValue(todo)
  }
  console.log(getValue);

  return (
    <div>
      <Input addTodo={addTodo} getValue={getValue.text} />
      <Output todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
    </div>
  )
}

export default Todo