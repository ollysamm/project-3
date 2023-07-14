import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // Render a loading indicator while the authentication status is being determined
    return <div className="text-3xl animate-pulse">Loading...</div>;
  }

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/" />;
  }

  // If the user is authenticated, render the Chat component for the specified path
  return <Route path={path} element={element} {...rest} />;
};

export default PrivateRoute;
