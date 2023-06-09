import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
 const styles = {
        border: '3px solid hotpink',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
     }
  return (
   
    <div className="Login">
      <div style={styles}>
        <h3>Login</h3>
      </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            </Form.Group>
            <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
            Login
            </Button>
        </Form>
    </div>
  );

}

export default Login;

// 