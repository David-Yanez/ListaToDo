import React, { useState } from 'react'
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"
import './App.css'

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
  const localStorageTodos = localStorage.getItem('TODOS_V1')
 
  let parsedTodos
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }


  const [todos, setTodos] = useState(parsedTodos)
  const [searchValue, setSearchValue] =React.useState("");
// !! convierte cualquier dato a true o false (true = cualqueir valor diferente de 0, -1, null, undefine, etc)
  const completedTodos = todos.filter(todo => !!todo.completed).length

  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))


  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }


  const completeTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text )
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
  }

  return (
    <>
    <div className="conteiner">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <TodoList>
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
