import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';


function ProtectedRouteSignIn({ children }) {
  const { user } = UserAuth();

  if (Object.keys(user).length === 0) {
    return children;
  }
  return <Navigate to='/' />;
}

export default ProtectedRouteSignIn;