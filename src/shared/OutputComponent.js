import React from 'react'

const OutputComponent = ({ list, onDelete, onEdit }) => {
  const onClickDelete = (item) => {
    onDelete(item);
  }
  const onClickEdit = (item) => {
    onEdit(item)
  }
  return (
    <div>
      {
        list.map((item, index) => {
          return (
            <div>
              <h2 key={index}>{item}</h2>
              <button onClick={() => onClickEdit(item)}>Edit</button>
              <button onClick={() => onClickDelete(item)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}
export default OutputComponent