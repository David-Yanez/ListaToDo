import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"
import './App.css'

const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Cortar carne', completed:true},
  {text: 'Tender la cama', completed:false},
  {text: 'Lavar platos', completed:false},
  {text: 'Cocinar el almuerzo', completed:true},
]


function App() {


  return (
    <>
    <div className="conteiner">
      <TodoCounter completed={6} total={10} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => 
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        )}
      </TodoList>
      <CreateTodoButton/>
      </div>
    </>
  )
}

export default App
