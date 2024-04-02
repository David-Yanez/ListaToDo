import React from 'react'
import {CompleteIcon} from '../TodoIcons/CompleteIcon'
import {DeleteIcon} from '../TodoIcons/DeleteIcon'
import './TodoItem.css'


export const TodoItem = (props) => {
//

  return (
    <li> 
     <CompleteIcon onComplete={props.onComplete}/>
      { /* <p onClick={props.onComplete} className={`${props.completed && "Icon-check--active"}`}>V</p> */}
        <p className={`${props.completed && "TodoItem-p--complete"} todos`}>{props.text}</p>
        { /*   <p onClick={props.onDelete} className='Icon-delete'>X</p> */}
      <DeleteIcon onDelete={props.onDelete}/>
    </li>
  )
}
