import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  localStorage.setItem("lastPath", JSON.stringify(location));
  return user.logged ? children : <Navigate to="/login" />;
};
