import React from 'react'
import './TodoCounter.css'

export const TodoCounter = ({total, completed}) => {
  return (
    <h1>Has completado {completed} de {total} TODOS</h1>
  )
}
