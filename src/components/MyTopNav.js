import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MyTopNav = ({ lessons }) => {
  console.log(lessons);
  return (
    <Navbar bg="light shadow" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <NavDropdown title={`All lessons`} id="basic-nav-dropdown">
            {lessons.map(lesson => (
              <LinkContainer to={`/lesson-${lesson.nr}`}>
                <NavDropdown.Item>lesson {lesson.nr}</NavDropdown.Item>
              </LinkContainer>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyTopNav;
