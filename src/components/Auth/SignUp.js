import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SignUp = ({setLogin}) => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/admin", {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
       data && setLogin(false)
      });
  };
  const handleBlur = (event) => {
    const newAdmin = {
      ...admin,
    };
    newAdmin[event.target.name]=event.target.value;
    setAdmin(newAdmin)
  };
  console.log(admin);
  return (
    <div>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="forName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Admin Name"
            name="name"
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onBlur={handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="forRoll">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="admin or editor"
            name="role"
            onBlur={handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onBlur={handleBlur}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
