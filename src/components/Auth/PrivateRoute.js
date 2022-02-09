import { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import { DataProvider } from "../../App";

export function PrivateRoute({ children, ...rest }) {
    let {email} = useContext(DataProvider);
    console.log(email);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  