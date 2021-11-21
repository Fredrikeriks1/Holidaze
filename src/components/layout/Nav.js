import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import { Authorization } from "../../constants/Authorization";

function Nav() {
  const { admin } = useContext(Authorization);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [isActive, setActive] = useState("false");

  return (
    <>
      {admin ? ( // Admin side
        <div
          className={isActive ? "menu menu__admin inn" : "menu menu__admin out"}
        >
          <div className="brand">
            <NavLink activeClassName="none" to="/" exact>
              <h1 title="Home">Holidaze</h1>
            </NavLink>
            <div
              className={isActive ? "btn-inn" : "btn-out"}
              onClick={handleToggle}
            >
              <i className="fas fa-arrow-right"></i>
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
          <div className="nav-links">
            <NavLink activeClassName="active" to="/admin/dashboard">
              <p>Dashboard </p>
              <i class="fas fa-tachometer-alt"></i>
            </NavLink>
            <NavLink activeClassName="active" to="/admin/establishments">
              <p>Overview </p>
              <i className="fas fa-hotel"></i>
            </NavLink>
            <NavLink activeClassName="active" to="/admin/add">
              <p>Add </p>
              <i className="fas fa-plus-square"></i>
            </NavLink>
            <NavLink activeClassName="active" to="/admin/messages">
              <p>Messages </p>
              <i className="fas fa-envelope-open"></i>
            </NavLink>
            <NavLink activeClassName="active" to="/admin/enquiries">
              <p>Enquiries </p>
              <i className="fas fa-calendar-check"></i>
            </NavLink>
            <Logout />
          </div>
        </div>
      ) : (
        // User side
        <div className="menu menu__user">
          <div className="brand">
            <NavLink activeClassName="none" to="/" exact>
              <div className="logo">
                <h1 title="Home">Holidaze</h1>
              </div>
            </NavLink>
          </div>
          <div className="nav-links dropdown">
            <button
              className={isActive ? "btn-closed" : "btn-open"}
              onClick={handleToggle}
            >
              <i className={isActive ? "fas fa-bars" : "fas fa-times"}></i>
            </button>
            <div className={isActive ? "closed" : "open"}>
              <NavLink
                activeClassName="active"
                onClick={handleToggle}
                to="/"
                exact
                id="home"
                title="Home"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                onClick={handleToggle}
                to="/accommodations"
                exact
                title="Accommodations"
              >
                Accommodations
              </NavLink>
              <NavLink
                activeClassName="active"
                onClick={handleToggle}
                to="/contact"
                title="Contact"
              >
                Contact
              </NavLink>
              <NavLink
                activeClassName="active"
                onClick={handleToggle}
                to="/login"
              >
                <i title="Admin login" className="fas fa-user"></i>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
