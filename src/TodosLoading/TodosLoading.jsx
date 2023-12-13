import React from 'react'
import './TodosLoading.css'

export const TodosLoading = () => {
  return (
<div class="container">
  <div class="cargando">
    <div class="pelotas"></div>
    <div class="pelotas"></div>
    <div class="pelotas"></div>
    <span class="texto-cargando">Cargando...</span>
  </div>
</div>
  )
}
