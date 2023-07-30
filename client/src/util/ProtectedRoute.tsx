import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./Auth"; // custom hook to check authentication

const ProtectedRoute = ({element}) => {
  const isAuthenticated = useAuth();
  if (isAuthenticated) {
    return element;
  } else {
    // Redirect to the signin page if not authenticated
    return <Navigate to="/signin" />;
  }
};

export default ProtectedRoute;