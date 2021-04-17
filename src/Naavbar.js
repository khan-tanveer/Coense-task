import React from "react";
import "./Naavbar.css";
import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Naavbar = () => {
  return (
    <div>
      <Navbar className="navbar" activeKey="" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Coense Task</Navbar.Brand>
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>User Add</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/listuser">
            <Nav.Link>User List</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/edituser">
            <Nav.Link>User edit</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Naavbar;
