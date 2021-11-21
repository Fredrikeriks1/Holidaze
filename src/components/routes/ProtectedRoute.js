import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { admin } = useContext(Authorization);
  return (
    <Route
      {...rest}
      render={(props) =>
        admin ? <Component {...rest} {...props} /> : <Redirect to="/register" />
      }
    />
  );
};

export default ProtectedRoute;
