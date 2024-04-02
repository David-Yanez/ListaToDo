import React from 'react'
import './TodosLoading.css'

export const TodosLoading = () => {
  return (
<div className="container-loading">
  <div className="cargando">
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <span className="texto-cargando">Cargando...</span>
  </div>
</div>
  )
}
