import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const FoodItems = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/food")
      .then((response) => response.json())
      .then((json) => setFood(json.data));
  }, []);
  return (
    <div>
      <h1>Food Data</h1>
      <Row>
        {food &&
          food.length > 0 &&
          food.map((fd) => (
            <Col md={3} key={fd._id}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{fd.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>${fd.price}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default FoodItems;
