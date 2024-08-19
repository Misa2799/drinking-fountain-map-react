import { Container, Nav, Navbar } from "react-bootstrap";

export function Header() {
  // if user login, display logout and bookmark instead of register and login

  // example below
  // items = [];
  // { items.length === 0 && <p>No item found</p> }

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Get Hydrated</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
