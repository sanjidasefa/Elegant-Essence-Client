import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
 const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex w-52 flex-col gap-4">
  <div className="flex items-center gap-4">
    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full"></div>
</div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace/>;
  }

  return children;
};


export default PrivateRoute;