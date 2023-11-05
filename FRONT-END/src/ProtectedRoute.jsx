import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

export function ProtectedRoute({ allowedRoles, ...props }) {
  const { isAuthenticatedLogin, loading, isLogin } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!isLogin) {
    return <Navigate to='/' replace />;
  }

  if (!allowedRoles.includes(isAuthenticatedLogin.id_tipo_usuario)) {
    // El usuario no tiene permiso para acceder a esta ruta
    return <Navigate to='/' replace />;
  }

  return <Outlet {...props} />;
}