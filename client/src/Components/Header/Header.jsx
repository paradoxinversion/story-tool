import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
const Header = props => {
  if (props.authenticated) {
    return (
      <header className="main-header">
        <nav>
          <ul className="main-header__nav-list">
            <li>
              <button
                onClick={async () => {
                  await axios.get("http://localhost:3000/api/auth/log-out");
                  await props.setAuthentication(false, null);
                  props.history.push("/");
                }}>
                Log Out
              </button>
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

export default withRouter(Header);
