import React from 'react'

export const Item = ({item, index}) => {
  return (
    <div className='pokemon-wrapper' key={index}>
      <div className='pokemon-card' key={item.id}>
        <div className='"pokemon-image.container'>
          <img src={item.img} alt={item.name} />
        </div>
        <div className='pokemon-info-container'>
          <h2 className='pokemon-name'>{item.name}</h2>
        </div>
      </div>
    </div>

  )
}