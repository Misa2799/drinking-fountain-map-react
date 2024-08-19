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
  }

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formEmail">
          <Form.Label style={{ marginTop: "24px" }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label style={{ marginTop: "24px" }}>Password</Form.Label>
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
          style={{ marginTop: "24px" }}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
