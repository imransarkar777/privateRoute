import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Navigate } from "react-router-dom";
import { Atom } from "react-loading-indicators";


const PrivateRoute = ({ children }) => {

  const { user } = useContext(AuthContext);

  // if (loading) {
  //   return (
  //     <Atom color="#005cc7" size="large" text="Loading...." textColor="" />
  //   );
  // }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
