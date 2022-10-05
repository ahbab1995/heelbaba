import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {

  const { id,name, img, description, price } = product;

  const navigate =  useNavigate()

  const ProductDetsilNav = (id) => {
    navigate(`/productdetail/${id}`)
  }
  return (
    <div className="col pt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "15rem" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => ProductDetsilNav(id) } variant="primary">Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
