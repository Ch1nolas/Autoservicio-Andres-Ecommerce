import React, { useEffect } from 'react';
import './App.module.css';
import { NavBarComponet} from './components';
import { MainRoutes } from './routes/MainRoutes';  




function App() {
  useEffect(() => {
    fetch('./data.json')
      .then(res=>res.json())
      .then(data => console.log(data))
  }, []);
  
  

  return (
    <div className="title">
      <NavBarComponet/>
      <MainRoutes />
    </div>
  );
}

export default App;
