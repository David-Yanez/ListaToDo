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


function App() {

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] =React.useState("");
// !! convierte cualquier dato a true o false (true = cualqueir valor diferente de 0, -1, null, undefine, etc)
  const completedTodos = todos.filter(todo => !!todo.completed).length
  console.log(completedTodos)
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
    <div className="conteiner">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => 
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        )}
      </TodoList>
      <CreateTodoButton/>
      </div>
    </>
  )
}

export default App
