import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorege'

export const TodoContext = React.createContext();

export const TodoProvider = ({children}) =>{

    
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] =React.useState("");

  const [openModal, setOpenModal] =React.useState(false);
// !! convierte cualquier dato a true o false (true = cualqueir valor diferente de 0, -1, null, undefine, etc)
  const completedTodos = todos.filter(todo => !!todo.completed).length


  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

 const addTodo = (text) =>{
  const  newTodos = [...todos];
  newTodos.push({
    text: text,
    completed: false
  })
  saveTodos(newTodos)
 }

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
console.log(searchedTodos+ "los todos")
   return (
    <TodoContext.Provider value={{
        loading,
         error,
          completedTodos,
          totalTodos,
          searchedTodos,
          searchValue,
          setSearchValue,
          completeTodo,
          deleteTodo, 
          addTodo,
          openModal,
          setOpenModal
          }}>

        {children}
    </TodoContext.Provider>
   ) 
}


