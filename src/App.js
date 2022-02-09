import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import Home from "./components/Home/Home";

export const DataProvider = createContext();

function App() {
  const [auth, setAuth] = React.useState({
    name: "Admin",
    email: "admin@info.com",
  });

  React.useEffect(() => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    setAuth({ name: name, email: email });
  }, []);
  return (
    <DataProvider.Provider value={auth}>
      <Router>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </DataProvider.Provider>
  );
}

export default App;
