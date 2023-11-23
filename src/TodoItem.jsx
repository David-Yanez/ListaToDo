import React from 'react'
import './TodoItem.css'

export const TodoItem = (props) => {

 
  return (
    <li>
        <p onClick={props.onComplete} className={`${props.completed && "Icon-check--active"}`}>V</p>
        <p className={`${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <p onClick={props.onDelete} className='Icon-delete'>X</p>
    </li>
  )
}
