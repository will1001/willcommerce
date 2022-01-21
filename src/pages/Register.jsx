import React, { useState } from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const { email, phone, username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFinish = async (e) => {
    e.preventDefault();
    const postData = {
      email: email,
      phone: phone,
      username: username,
      password: password,
    };
    register(postData, dispatch);
    navigate("/login");
  };
  return (
    <Container>
      <h1>REGISTER</h1>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => onChange(e)}
      />
      <Input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={(e) => onChange(e)}
      />
      <Input
        type="text"
        name="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => onChange(e)}
      />
      <Input
        type="password"
        name="confirm_passsword"
        placeholder="Confirm Password"
      />
      <LoginButton onClick={handleFinish}>Sign Up</LoginButton>
    </Container>
  );
};

export default Register;
