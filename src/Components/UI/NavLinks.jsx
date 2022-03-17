import { NavLink } from "react-router-dom";

export const NavLinks = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item nav-link active" : "nav-item nav-link"
        }
        to="/marvel"
      >
        Marvel
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item nav-link active" : "nav-item nav-link"
        }
        to="/dc"
      >
        DC
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-item nav-link active" : "nav-item nav-link"
        }
        to="/search"
      >
        Search
      </NavLink>
    </>
  );
};
