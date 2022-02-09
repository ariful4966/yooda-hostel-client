import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { DataProvider } from "../../App";

const Auth = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useContext(DataProvider);
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

        localStorage.setItem("name", data.data.name)
        localStorage.setItem("email", data.data.email)
        localStorage.setItem("role", data.data.role)
      });

    if (auth.email) {
      history.replace(from);
    }
  };
  console.log(user);

  return (
    <div>
      <Container>
        <div className="login_area d-flex justify-content-center align-items-center">
          <div className="login_form" style={{ width: "300px" }}>
            <h1>Authentication</h1>
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
        </div>
      </Container>
    </div>
  );
};

export default Auth;
