import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
    let a = event.target.value;
    props.toggleTheme(a);
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* 
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input py-2 px-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.EnableDarkMode}
              style={{ border: "1px solid black" }}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
              style={{ fontSize: "1rem" }}
            >
              <b>Dark Mode</b>
            </label>
          </div> */}
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "11.5%" }}
            onChange={handleOnChange}
          >
            <option value="1">Light Theme</option>
            <option value="2">Dark Theme</option>
            <option value="3">Hacker Theme</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string,
  textCol: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
