import React, { useContext, useEffect, useState } from 'react'
import { TodoCounter } from "./TodoCounter/TodoCounter"
import { TodoSearch } from "./TodoSearch/TodoSearch"
import { TodoList } from "./TodoList/TodoList"
import { TodoItem } from "./TodoItem/TodoItem"
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton"
import './App.css'
import { TodosLoading } from './TodosLoading/TodosLoading'
import { TodoContext, TodoProvider } from './TodoContext/TodoContext'
import { Modal } from './Modal/modal'
import { TodoCreate } from './TodoCreate/TodoCreate'

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
 
 const {
  loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal
} = useContext(TodoContext)

  return (
    <>

    <div className="conteiner">
      <TodoCounter />
      <TodoSearch />
  
      <TodoList>
      {loading && <TodosLoading/>}
      {error && <p>hubo un error</p>}
      {(!loading && searchedTodos.length == 0) && <p>Crea tu primer Todo !!</p>}
      {/*console.log("app "+ searchedTodos)*/}
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

      {openModal && (
        <Modal>
          <TodoCreate/>
          
        </Modal>
      )}
     
      </div>
      
    </>
  )
}

export default App
