import React from 'react'

export const PokemonCard = ({pokemon, index}) => {
  return (
    <div className='pokemon-wrapper' key={index}>
      <div className='pokemon-card' key={pokemon.id}>
        <div className='"pokemon-image.container'>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +1}.png`} alt={pokemon.name} />
        </div>
        <div className='pokemon-info-container'>
          <h2 className='pokemon-name'>{pokemon.name}</h2>
        </div>
      </div>
    </div>

  )
}