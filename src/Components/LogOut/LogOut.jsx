import PropTypes from "prop-types";

export const LogOut = ({ handleLogOut, user }) => {
  return (
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
      <ul className="navbar-nav ml-auto">
        <span className="nav-item nav-link text-info">{user.name}</span>
        <button className="nav-item nav-link btn" onClick={handleLogOut}>
          Logout
        </button>
      </ul>
    </div>
  );
};

LogOut.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
