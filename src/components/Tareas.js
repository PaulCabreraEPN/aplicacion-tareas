import React from 'react'
import logo from './images/logo.png';
import './Tareas.css'

export const Tareas = () => {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img
          src={logo} 
          className='logo-epn'
          alt="logo"
          width={'200px'}
          height={'200px'}
        />
      </div>
      <div className='lista-tareas'>
        <h1>Lista de Tareas</h1>
        Va a ser un componente de Tareas
      </div>
    </div>
  )
}
