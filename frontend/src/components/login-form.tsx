import { useState } from "react";
import { FormEvent, MouseEvent } from "react";
import { Button, Container, Form } from "react-bootstrap";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(
    e:
      | FormEvent<HTMLFormElement>
      | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void {
    e.preventDefault();
    alert("Submit");
    // submit user info to server
  }

  return (
    <Container
      style={{
        marginTop: "24px",
        padding: "16px",
        width: "600px",
      }}
    >
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formEmail">
          <Form.Label style={{ marginTop: "24px" }}>
            <h5>Email</h5>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label style={{ marginTop: "24px" }}>
            <h5>Password</h5>
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          style={{ marginTop: "24px", background: "#2E679A" }}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
