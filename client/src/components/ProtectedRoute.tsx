import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return auth.currentUser ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
