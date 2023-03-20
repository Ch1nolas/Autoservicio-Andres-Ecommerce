import React from 'react';
import './ItemListContainer.css';

function RenderProducts(props) {
    return <p>Nombre item: {props.name}</p>
}

export const ItemListContainerComponent = () => {
    return (
        <div>
            <h1 className="title">Productos Destacados</h1>
            <div className="products">
                <RenderProducts name="Carne Molida"/>
                <RenderProducts name="Asado"/>
                <RenderProducts name="Coca cola"/>
                
            </div>
        </div>
    )
}