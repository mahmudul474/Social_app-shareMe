import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../AuthContext/AuthContext";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import Spinner from "../../components/Spinner/Spinner";

const Private = ({ children }) => {
  const { user, loading } = useContext(userContext);

  if (loading) {
    return <SmallSpinner></SmallSpinner>;
  }
  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login"> </Navigate>;
};

export default Private;
