import { FC } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem("Role");

  const isAuthenticated = !!userRole;
  const hasAccess = allowedRoles.includes(userRole!);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!hasAccess) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
