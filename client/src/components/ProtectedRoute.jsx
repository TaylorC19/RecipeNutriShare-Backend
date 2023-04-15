import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';


function ProtectedRoute({ children }) {
  const { user } = UserAuth();

  if (Object.keys(user).length === 0) {
    return <Navigate to='/signup' />
  }
  return children;
}

export default ProtectedRoute