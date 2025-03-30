import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '../store/store';

const ProtectedRoutes: React.FC = () => {
  const token = useStore((state) => state.token);

  if (token) {// se están haciendo pruebas luego restaurar a !token
    return <Outlet />; // eliminar al terminar pruebas
    //return <Navigate to="/login" />; restaurar al terminar pruebas
  }

  return <Outlet />;
};

export default ProtectedRoutes;
