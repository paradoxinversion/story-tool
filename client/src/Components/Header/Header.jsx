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
                Dashboard <i className="fas fa-keyboard" />
              </Link>
            </li>
            <li>
              <Link className="main-header__nav__list__link" to="/settings">
                Settings <i className="fas fa-cogs" />
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="main-header__nav__list__link"
                onClick={async () => {
                  await attemptUserLogOut();
                  await props.setAuthentication(false, null);
                }}>
                Log Out <i className="fas fa-sign-out-alt" />
              </Link>
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
                Home <i className="fas fa-home" />
              </Link>
            </li>
            <li>
              <Link className="main-header__nav__list__link" to="/auth/signup">
                Sign Up <i className="fas fa-user-plus" />
              </Link>
            </li>
            <li>
              <Link className="main-header__nav__list__link" to="/auth/login">
                Log In <i className="fas fa-sign-in-alt" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default withRouter(Header);
