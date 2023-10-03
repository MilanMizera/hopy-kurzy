import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from "../data/AuthContext"

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/prihlaseni' />;
  }
  return children;
};

export default ProtectedRoute;