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

function useLocalStorage(itemName, initialValue) {

  

  const localStorageItem = localStorage.getItem(itemName)
 
  let parsedItem
  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
 

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] =React.useState("");
// !! convierte cualquier dato a true o false (true = cualqueir valor diferente de 0, -1, null, undefine, etc)
  const completedTodos = todos.filter(todo => !!todo.completed).length

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
