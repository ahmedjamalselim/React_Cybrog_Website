/** @format */

import { Component } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.png";
import NavItem, { NavItemDropDown } from "../../NavItem/NavItem";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar navbar-expand-md  cybrg-navbar navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {" "}
            <img src={logo} alt="logo" />{" "}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav-internal" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                {" "}
                <Link to="/" className="nav-link">
                  Home
                </Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/browse" className="nav-link">
                  Browse
                </Link>{" "}
              </NavItem>
              <NavItemDropDown>
                <Link
                  to="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Details
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link to="/#" className="dropdown-item">
                      WorldWar
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/#" className="dropdown-item">
                      PubG
                    </Link>{" "}
                  </li>
                </ul>
              </NavItemDropDown>
              <NavItem>
                {" "}
                <Link to="/streams" className="nav-link">
                  Streams
                </Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>{" "}
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
