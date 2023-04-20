import React, { useEffect } from 'react';
import axios from 'axios';
import './App.module.css';
import { NavBarComponet, ItemListContainerComponent } from './components';
import { MainRoutes } from './routes/MainRoutes';  


async function GetUsers() {
  await fetch(`https://reqres.in/api/users?page=2`)
  .then(res => res.json())
  .then(data => console.log(data))
}

function App() {

  useEffect(() => {
    GetUsers();
  })

  return (
    <div className="title">
      <NavBarComponet/>
      <MainRoutes />
    </div> 
  );
}

export default App;
