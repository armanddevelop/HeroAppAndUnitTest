import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { types } from "../../Types/types";
import { LogOut } from "../LogOut/LogOut";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const handleLogOut = () => {
    console.log("me estoy ejecuntando desde las pruebas!!!!!");
    const action = { type: types.logout };
    dispatch(action);
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLinks />
        </div>
      </div>
      <LogOut handleLogOut={handleLogOut} user={user} />
    </nav>
  );
};
