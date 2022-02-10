import { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import { DataProvider } from "../../App";

export function PrivateRoute({ children, ...rest }) {
    let user = useContext(DataProvider);
    // console.log(user);
    return (
      <Route
        {...rest}
        render={({ location }) =>
           user.role === 'admin' || sessionStorage.getItem('token') ? (
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
  