import React from "react";
import { NavLink } from "react-router-dom";
const logo = new URL("../logobooks.png", import.meta.url);

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-light">
        <div className="container-fluid">
          <div className="logo-main">
            <img
              src={logo}
              alt=""
              height={"50px"}
              style={{ marginLeft: "5px" }}
            />
          </div>
          <NavLink className="navbar-brand text-light" to="/">
            Love Your Book Store
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
