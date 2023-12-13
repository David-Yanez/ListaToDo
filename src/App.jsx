import React, { useEffect, useState } from 'react'
import { TodoCounter } from "./TodoCounter/TodoCounter"
import { TodoSearch } from "./TodoSearch/TodoSearch"
import { TodoList } from "./TodoList/TodoList"
import { TodoItem } from "./TodoItem/TodoItem"
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton"
import './App.css'
import { useLocalStorage } from './Hooks/useLocalStorege'
import { TodosLoading } from './TodosLoading/TodosLoading'

const defaultTodos = [
  {text: 'Cortar cebolla', completed:false},
  {text: 'Cortar carne', completed:true},
  {text: 'Tender la cama', completed:false},
  {text: 'Lavar platos', completed:true},
  {text: 'Cocinar el almuerzo', completed:true},
]

/*const StringifiedTodos = JSON.stringify(defaultTodos)
localStorage.setItem('TODOS_V1', StringifiedTodos)
localStorage.removeItem('TODOS_V1')*/


function App() {
 

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] =React.useState("");
// !! convierte cualquier dato a true o false (true = cualqueir valor diferente de 0, -1, null, undefine, etc)
  const completedTodos = todos.filter(todo => !!todo.completed).length

  console.log('log 1')
 
 useEffect(() =>{
  console.log('Log 2')
 },[searchValue])  
  console.log('log 3')

  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))


  const completeTodo = (text) =>{
    const newItem = [...todos]
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text )
    newItem[todoIndex].completed = true
    saveTodos(newItem)
  }

  const deleteTodo = (text) =>{
    const newItem = [...todos]
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text )
      newItem.splice(todoIndex, 1)
      saveTodos(newItem)
  }

  return (
    <>
    <div className="conteiner">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <TodoList>
        {loading && <TodosLoading/>}
        {error && <p>hubo un error</p>}
        {(!loading && searchedTodos.length == 0) && <p>Crea tu primer Todo !!</p>}

        {searchedTodos.map(todo => 
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}/>
        )}
      </TodoList>
      <CreateTodoButton/>
      </div>
    </>
  )
}

export default App
