import React from 'react';
import {Dropdown, Button, NavDropdown} from 'react-bootstrap';
import './NavBar.css';

export const NavBarComponet = () => {
  return (
    <div className='header'>
      <div className='navegation'>
        <a href="/"><img src="./img/Logo.png" alt="Logo" className='logo' /></a>
        <ul className='navbar'>
          <li>
          <NavDropdown id="nav-dropdown-dark-example" title="Categorias">
              <NavDropdown.Item href="/catalog">Carnes</NavDropdown.Item>
              <NavDropdown.Item href="/catalog">Cereales</NavDropdown.Item>
              <NavDropdown.Item href="/catalog">Embutidos</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className='searchbar-container'>
            <input type="search" className='bar-search' placeholder='!Hola¡ Busca tu producto aquí'/>
            <Button className='button-search'>Buscar</Button>
          </li>
          <li>
            <a href="#">Mi Cuenta</a>
          </li>
          <li>
            <a href="#">Carrito<i class="fa fa-shopping-cart"></i></a>
          </li>
        </ul> 
      </div>
    </div>
  )
}
