import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "./ProtectedRoute.interface";

export const ProtectedRoute = ({ token, redirectPath = "/login" }: ProtectedRouteProps) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}
