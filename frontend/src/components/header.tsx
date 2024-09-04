import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export function Header() {
  // if user login, display logout and bookmark instead of register and login
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/">
          <h2>Get Hydrated</h2>
        </Navbar.Brand>
        <Nav>
          {isLogin ? (
            <>
              <Nav.Link href="/bookmarks" className="me-4">
                <h4>Bookmark</h4>
              </Nav.Link>
              <Nav.Link href="/logout">
                <h4>Logout</h4>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/register" className="me-4">
                <h4>Register</h4>
              </Nav.Link>
              <Nav.Link href="/login">
                <h4>Login</h4>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
