import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Successfully log out");
      })
      .catch((error) => {});
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/category/0">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
          </Nav>
          <Nav>
            {user && <Nav.Link href="#deets">{user?.displayName}</Nav.Link>}
            {user ? (
              <Link to="/login">
                <Button onClick={handleLogout} variant="dark">
                  Log out
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="dark">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
