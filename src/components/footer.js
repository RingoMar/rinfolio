import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function footer() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="bottom">
      <Navbar.Brand>© 2020 Copyright Rin</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav className="justify-content-end">
        <Navbar.Text>
          This website was made using{" "}
          <a href="https://reactjs.org/">React Javascript</a> 💫
        </Navbar.Text>
        <NavLink role="button" className="nav-link" to="./privacy-policy">
          Privacy Policy
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default footer;
