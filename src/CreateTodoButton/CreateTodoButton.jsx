import React, { useContext } from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext'

export const CreateTodoButton = () => {

  const { setOpenModal} = useContext(TodoContext)
  const openModal = () =>{
    setOpenModal(true)
  }

  return (
    <button  onClick={openModal} className='button-crear'>Crear</button>

  )
}
