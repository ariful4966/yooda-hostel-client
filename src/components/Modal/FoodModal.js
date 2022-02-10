import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FoodModal = ({setModalShow}) => {
  const [food, setFood] = useState({
    name: "",
    price: "",
  });
  const handleFoodItem = (e) => {
    const newFoodItem = { ...food };
    newFoodItem[e.target.name] = e.target.value;

    setFood(newFoodItem);
  };

  const handleFoodSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/food", {
      method: "POST",
      body: JSON.stringify(food),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        token: sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
       setModalShow(false)
      });
  };
  return (
    <div>
      <Form onSubmit={handleFoodSubmit}>
        <Form.Group className="mb-3" controlId="forName">
          <Form.Label>Food Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Food Name"
            name="name"
            onBlur={handleFoodItem}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="forRoll">
          <Form.Label>Food Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Food Price"
            name="price"
            onBlur={handleFoodItem}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FoodModal;
