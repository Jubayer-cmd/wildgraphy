import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, images, description } = service;
  return (
    <div className="mx-auto">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>Package: {name}</Card.Title>
          <Card.Title>Price: {price}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Button className="text-center" variant="primary">
            CheckOut
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
