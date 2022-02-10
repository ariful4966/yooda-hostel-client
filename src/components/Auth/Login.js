import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const handleBlur = (e) => {
      const newUser = { ...user };
  
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    };
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = (e) => {
      e.preventDefault();
      fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
         
  
          data.token && sessionStorage.setItem("token", data.token)
  
           history.replace(from);
        });
    };
    return (
        <div>
             <Form onSubmit={login}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onBlur={handleBlur}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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

export default Login;