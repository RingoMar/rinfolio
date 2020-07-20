import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navlogo from "./favicon.ico";

function newbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="">
      <Navbar.Brand>
        <NavLink role="button" className="nav-link" to="./">
          <img
            alt=""
            src={navlogo}
            width="49"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          RINGO MAR
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavLink role="button" className="fix-nav-links nav-link" to="./">
            <i className="ico-nav material-icons"> home </i>Home
          </NavLink>
          <NavLink
            role="button"
            className="fix-nav-links nav-link"
            to="./about"
          >
            <i className="ico-nav material-icons">account_box</i>About
          </NavLink>
          <NavLink role="button" className="fix-nav-links nav-link" to="./rin">
            <i className="ico-nav material-icons"> public </i>Rin Bot
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default newbar;
