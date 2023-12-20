import React, { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext'

export const TodoCounter = () => {
const { completedTodos, totalTodos,} = useContext(TodoContext)
  return (
    <h1>Has completado {completedTodos} de {totalTodos} TODOS</h1>
  )
}
