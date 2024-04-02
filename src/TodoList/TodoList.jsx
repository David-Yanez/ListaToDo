import React from 'react'
import './index.css'

export const TodoList = (props) => {
  return (
    <ul className='scrooll'>
        {props.children}
    </ul>
  )
}
