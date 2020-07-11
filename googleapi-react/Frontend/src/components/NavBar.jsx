import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="active" href="/ ">
          Community
        </Nav.Link>
        <Nav.Link>
          <Link to="/joinCommunity">Join</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
