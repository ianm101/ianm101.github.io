import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col, NavbarBrand, Navbar, Nav, NavDropdown} from 'react-bootstrap';

const HeaderNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Ian Murray</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Experience" id="collasible-nav-dropdown" href="/experience">
              <NavDropdown.Item href="/experience/work">Work Experience</NavDropdown.Item>
              <NavDropdown.Item href="/experience/education">Education</NavDropdown.Item>
              <NavDropdown.Item href="/experience/projects">Projects</NavDropdown.Item>
              {/*
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        */}
            </NavDropdown>
            <Nav.Link href="/coaching">Coaching</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/contact">
              Get in touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default HeaderNavbar;