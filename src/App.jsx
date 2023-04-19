import React, { useEffect } from 'react';
import axios from 'axios';
import './App.module.css';
import { NavBarComponet, ItemListContainerComponent } from './components';
import { PokemonCard } from './pages';
import { MainRoutes } from './routes/MainRoutes';  

const promesaPokemon = new Promise((resolve, reject) => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=100";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});


function App() {
  useEffect(() => {
    fetch('./data.json')
      .then(res=>res.json())
      .then(data => console.log(data))
  }, []);
  
   

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    promesaPokemon
    .then((data) => {
    setLoading(true);
    setData(data.results);
    console.log(data.results);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() =>{
      setLoading(false);
    });
  });

  return (
    <div className="title">
      <NavBarComponet/>
      <MainRoutes />
      <div>
        {loading ? (
          <div>Loading...</div>
        ): (
          <div className='pokemon-container'>
            {data.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} index= {index} />;
            })}
          </div>
        )}
      </div>
    </div> 
  );
}

export default App;
