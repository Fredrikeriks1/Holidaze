import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";

function LogOut() {
  const { logout } = useContext(Authorization);
  const history = useHistory();
  const username = localStorage.getItem("user");

  function doLogout() {
    logout();
    history.push("/");
  }

  return (
    <div title="Log Out" className="logout" onClick={doLogout}>
      <p>Log out: {username} </p>
      <i className="fas fa-sign-out-alt"></i>
    </div>
  );
}

export default LogOut;
