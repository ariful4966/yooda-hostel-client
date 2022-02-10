import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <Container>
        <div className="login_box d-flex justify-content-center align-items-center mt-5">
        <Card style={{width:'400px', padding: '20px'}}>
          <div className="login_area ">
            <div className="login_form" style={{ width: "100%" }}>
              <h2>{login ? "Login In ": "Sign Up"}</h2>
              {login ? <Login /> : <SignUp setLogin={setLogin} />}
            </div>
          </div>
          <p style={{textAlign: 'center', cursor:'pointer', color:"green"}} onClick={()=>setLogin(!login)}>
            {login ? "Create a Admin Account" : "Login in your Admin Account"}
          </p>
        </Card>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
