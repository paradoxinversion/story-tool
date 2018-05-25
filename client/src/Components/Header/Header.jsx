import React from "react";
import { Link } from "react-router-dom";
const Header = props => {
  if (props.authenticated) {
    return (
      <header className="main-header">
        <nav>
          <ul className="main-header__nav-list">
            <li>
              <Link className="main-header__nav-link" to="/auth/log-out">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="main-header">
        <nav>
          <ul className="main-header__nav-list">
            <li>
              <Link className="main-header__nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="main-header__nav-link" to="/auth/signup">
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="main-header__nav-link" to="/auth/login">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
