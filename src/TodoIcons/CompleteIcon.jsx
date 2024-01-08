import React from 'react'
import { TodoIcon } from './TodoIcon'

export const CompleteIcon = ({onComplete}) => {
  return (
    <TodoIcon
    type="check"
    color="gray"
    onClick={onComplete}/> 
  )
}
