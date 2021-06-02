import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "18rem", padding: "10px", margin: "20px" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title> {product.name}</Card.Title>
          </Link>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text as="div">
            <Rating value={product.rating} text={product.numReviews} />
          </Card.Text>
          <Card.Text className="heading-three">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
