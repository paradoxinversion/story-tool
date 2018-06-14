import React from "react";
import { Link, withRouter } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import attemptUserLogOut from "../../toolCommands/user/attemtpUserLogOut";

import "./Header.css";
const Header = props => {
  if (props.authenticated) {
    return (
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__nav__list">
            <li>
              <Link
                className="main-header__nav__list__link"
                to="/tool/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="main-header__nav__list__link" to="/settings">
                Settings
              </Link>
            </li>

            <li>
              <div
                className="main-header__nav__list__link"
                onClick={async () => {
                  await attemptUserLogOut();
                  await props.setAuthentication(false, null);
                  props.history.push("/");
                }}>
                Log Out
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__nav__list">
            <li>
              <Link className="main-header__nav__list__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="main-header__nav__list__link" to="/auth/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="main-header__nav__list__link" to="/auth/login">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default withRouter(Header);
