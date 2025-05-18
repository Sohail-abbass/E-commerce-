import React, { useState } from "react";
import styled from "styled-components";
import { login } from "./authService";

// Styled Components
const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #005fcc;
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message),"invalid credential";
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
}
