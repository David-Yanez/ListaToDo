import React from 'react'
import './TodoItem.css'

export const TodoItem = (props) => {

 
  return (
    <li>
        <p className={`${props.completed && "Icon-check--active"}`}>V</p>
        <p className={`${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <p className='Icon-delete'>X</p>
    </li>
  )
}
