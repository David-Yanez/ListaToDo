import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContext, TodoProvider } from './TodoContext/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TodoProvider>
       <App />
  </TodoProvider>
  </React.StrictMode>,
)
