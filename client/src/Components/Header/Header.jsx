import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import "./Header.css";
const Header = props => {
  if (props.authenticated) {
    return (
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__nav__list">
            <li>
              <button
                className="button"
                onClick={async () => {
                  await axios.get("http://localhost:3000/api/auth/log-out");
                  await props.setAuthentication(false, null);
                  props.history.push("/");
                }}>
                Log Out
              </button>
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
