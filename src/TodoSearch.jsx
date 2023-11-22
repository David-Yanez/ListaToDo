import React from 'react'
import './TodoSearch.css'

export const TodoSearch = ({searchValue, setSearchValue}) => {


  return (
    <input 
    value={searchValue}
    onChange={e =>  setSearchValue(e.target.value)} placeholder='Buscar' />
  )
}
