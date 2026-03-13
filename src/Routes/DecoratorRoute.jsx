import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useRoles from '../hooks/useRoles';
import LoadingSkeleton from '../Component/Shared/LoadingSkeleton';

const DecoratorRoute = ({ children }) => {
  const { role, roleLoading } = useRoles();
  const location = useLocation();
  if (roleLoading) return <LoadingSkeleton />;
  if (role !== 'decorator') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default DecoratorRoute;