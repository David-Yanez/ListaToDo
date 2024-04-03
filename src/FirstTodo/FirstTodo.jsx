import React from 'react'
import './index.css'

export const FirstTodo = () => {
  return (
    <div className='container-fristTodo'>
        <figure className='iconss  icon-nota'>
            <img className='imagg' src="/notas.svg" alt="" />
        </figure>
        <p className='frTodo'>Crea tu primer Todo</p>
        <figure className='iconss icon-abajo'>
            <img className='imagg' src="/abajo.png" alt="" />
        </figure>
    </div>
  )
}
