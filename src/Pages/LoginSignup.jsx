import React, { useState } from "react";
import styled from "styled-components";
import { signUp } from "./authService";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f6f8;
`;

const FormBox = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

const Button = styled.button`
  padding: 0.9rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #005fcc;
  }
`;

const Agreement = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #0077ff;
    text-decoration: none;
  }
`;

const LoginRedirect = styled.div`
  margin-top: 1.5rem;
  font-size: 0.95rem;
  text-align: center;

  a {
    color: #0077ff;
    text-decoration: none;
    font-weight: 500;
  }
`;

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <FormBox>
        <Title>Create an Account</Title>
        <Fields>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleSignup}>Sign Up</Button>
        </Fields>

        <Agreement>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing, I agree to the <a href="/">terms of use</a> and <a href="/">privacy policy</a>.
          </label>
        </Agreement>

        <LoginRedirect>
          Already have an account? <Link to="/logiin">LOGIN HERE</Link>
        </LoginRedirect>
      </FormBox>
    </Container>
  );
};

export default LoginSignup;
