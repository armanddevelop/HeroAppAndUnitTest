import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { types } from "../../Types/types";
import { buildPaths } from "../../utils/paths";

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogIn = () => {
    const action = {
      type: types.login,
      payload: { name: "alicha" },
    };
    dispatch(action);
    const lastPath = buildPaths(localStorage.getItem("lastPath") || "");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogIn}>
        LogIn
      </button>
    </div>
  );
};
