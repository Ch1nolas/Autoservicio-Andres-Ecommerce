import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ItemListContainer.css";

function RenderProducts(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <div>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Hola que tal
          </Card.Text>
          <Button variant="primary">+ Agregar al carrito</Button>
        </Card.Body>
      </div>
    </Card>
  );
}
export const ItemListContainerComponent = () => {
  return (
    <div>
      <h1 className="title">Productos Destacados</h1>
      <div className="products">
        <RenderProducts name="Carne Molida"/>
      </div>
    </div>
  );
};
