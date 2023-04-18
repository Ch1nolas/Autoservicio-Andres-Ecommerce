import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './ItemListContainer.css';

function RenderProducts(props) {
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
}
export const ItemListContainerComponent = () => {
    return (
        <div>
            <h1 className="title">Productos Destacados</h1>
            <div className="products">
                <RenderProducts name="Carne Molida"/>
                <RenderProducts name="Asado"/>
                <RenderProducts name="Coca cola"/>
                <RenderProducts name="Fernet"/>
            </div>
        </div>
    )
}