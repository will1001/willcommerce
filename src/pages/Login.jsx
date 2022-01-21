import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`;
const Input = styled.input`
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  margin: 10px 0px;
  border: 0.5px solid #afaaaf;
  &:focus {
    outline: none !important;
  }
`;
const LoginButton = styled.div`
  background-color: #1976d2;
  color: white;
  padding: 10px;
  border-radius: 50px;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
  width: 100px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const postData = {
      email: email,
      password: password,
    };
    login(postData, dispatch);
  };
  return (
    <Container>
      <h1>LOGIN</h1>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </Container>
  );
};

export default Login;
