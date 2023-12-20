import React, { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext'


export const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext)
  return (
    <input 
    value={searchValue}
    onChange={e =>  setSearchValue(e.target.value)} placeholder='Buscar' />
  )
}
