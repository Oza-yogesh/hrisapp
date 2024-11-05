import { FC } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const userRole = useSelector((state: RootState) => state.user.role);
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

interface RedirectIfAuthenticatedProps {
  children: JSX.Element;
}

export const RedirectIfAuthenticated: FC<RedirectIfAuthenticatedProps> = ({
  children,
}) => {
  const userRole = useSelector((state: RootState) => state.user.role);
  const isAuthenticated = !!userRole;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
