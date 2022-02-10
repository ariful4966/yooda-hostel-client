import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import Home from "./components/Home/Home";

export const DataProvider = createContext();

function App() {
  const [auth, setAuth] = useState({
    name: "",
    email:"",
    role: ""
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const { name, email, role } = jwt_decode(token);
      setAuth({ name, email, role });
    }
  }, []);
  return (
    <DataProvider.Provider value={auth}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </DataProvider.Provider>
  );
}

export default App;
