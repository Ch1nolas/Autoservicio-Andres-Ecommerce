import React from 'react';
import {Dropdown, Button, NavDropdown} from 'react-bootstrap';
import './NavBar.css';

export const NavBarComponet = () => {
  return (
    <div className='header'>
      <div className='navegation'>
        <a href="#"><img src="./img/Logo.png" alt="Logo" className='logo' /></a>
        <ul className='navbar'>
          <li>
          <NavDropdown id="nav-dropdown-dark-example" title="Categorias">
              <NavDropdown.Item href="#">Carnes</NavDropdown.Item>
              <NavDropdown.Item href="#">Cereales</NavDropdown.Item>
              <NavDropdown.Item href="#">Embutidos</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className='searchbar-container'>
            <input type="search" className='bar-search' placeholder='!Hola¡ Busca tu producto aquí'/>
            <Button variant="dark" className='button-search'>Buscar</Button>
          </li>
          <li>
            <a href="#">Mi Carrito</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul> 
      </div>
    </div>
  )
}
