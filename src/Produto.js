import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Produto({ title, price,  image }) {
        return (
    <div className="produto">
        <Card className="produto">
        <Card.Img variant="top" src={image}/>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>R${price.toFixed(2)} </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
        );
    }
