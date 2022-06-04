import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header Section */}
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ET</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/register" className="nav-link">
                Signup
              </Link>
              <Link to="/" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dynamically updated page content section */}

      <main className="container wrapper">{children}</main>

      {/* Footer Section */}

      <footer className="bg-dark text-light text-center py-5">
        All rights reserved &copy; | Made with ❤ by Prateek Khindri
      </footer>
    </div>
  );
};

export default Layout;
