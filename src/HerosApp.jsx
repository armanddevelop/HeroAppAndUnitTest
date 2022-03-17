import { useEffect, useReducer } from "react";
import { AppRouters } from "./Routers/AppRouters";
import { AuthContext } from "./Auth/AuthContext";
import { authReducer } from "./Auth/authReducer";
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
export const HerosApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouters />
    </AuthContext.Provider>
  );
};
