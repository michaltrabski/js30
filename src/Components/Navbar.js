import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MyTopNav = () => {
  return (
    <Navbar bg="light shadow mb-5" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <NavDropdown title="All lessons" id="basic-nav-dropdown">
            <LinkContainer to="/lesson-1">
              <NavDropdown.Item>lesson 1</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/lesson-2">
              <NavDropdown.Item>lesson 2</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyTopNav;
