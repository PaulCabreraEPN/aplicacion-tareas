import React from 'react'
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Tareas');
  };
  
  return (
    <aside>
      <img src={logo} width={'100px'} height={'100px'} className='logo-epn'/>
            <h2>Sidebar</h2>
            <p>Contenido de Sidebar</p>
            <ul class="collapse">
                <li><a href=" ">Mi Perfil </a></li>
                <li><a onClick={handleLoginClick}>Tareas</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Logout</a></li>
            </ul>
    </aside>

  )
}
