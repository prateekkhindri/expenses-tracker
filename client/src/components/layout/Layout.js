import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, navigate, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const info = JSON.parse(window.sessionStorage.getItem("user"));
    setUser(info);
  }, []);

  console.log(user);

  const handleOnLogOut = () => {
    window.sessionStorage.removeItem("user");
    // Navigate("/");
  };

  return (
    <div>
      {/* Header Section */}
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ET</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="nav-link">{user?.name}</div>

              {!user?._id ? (
                <>
                  <Link to="/register" className="nav-link">
                    Signup
                  </Link>
                  <Link to="/" className="nav-link">
                    Login
                  </Link>
                </>
              ) : (
                <Link to="/" className="nav-link" onClick={handleOnLogOut}>
                  Logout
                </Link>
              )}
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
