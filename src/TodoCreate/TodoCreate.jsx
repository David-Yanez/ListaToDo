import React, { useContext, useState } from 'react'
import './TodoCreate.css'
import { TodoContext } from '../TodoContext/TodoContext'

export const TodoCreate = () => {
  const {
    setOpenModal,
    addTodo
  } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

 const onSubmit = (e)=>{
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = ()=>{
    setOpenModal(false)
  }

  const onChange = (e) =>{
    setNewTodoValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
        <label className='Modal-title' htmlFor="carear Todo">Escribe un nuevo TODO</label>
        <textarea placeholder='Escribe aqui...'
        value={newTodoValue}
        onChange={onChange}/>
    <div className='TodoForm-buttons'>
      <button type='button' onClick={onCancel} className='TodoCrear-button-cancel'>Cancelar</button>
      <button type='submit' className='TodoCrear-button-add'>Añadir</button>
    </div>
        </form>
  )
}
