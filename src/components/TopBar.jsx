import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 0 10px;
`;

const Left = styled.div`
  display: flex;
`;

const Child = styled.div`
  display: flex;
  align-items: center;
  border-right: 0.1px solid #e0d0d0;
  font-size: 12px;
  padding: 5px;
  cursor: pointer;
  &:nth-child(1) {
    border-left: 0.1px solid #e0d0d0;
  }
  > span,
  select {
    margin: 0 10px;
  }
`;

const Right = styled.div`
  display: flex;
`;

const TopBar = () => {
  return (
    <Container>
      <Left>
        <Child>
          <LocalPhoneOutlinedIcon />
          <span>+62 123453345</span>
        </Child>
        <Child>
          <MailOutlineOutlinedIcon />
          <span>willcommerce@gmail.com</span>
        </Child>
        <Child>
          <LanguageIcon></LanguageIcon>
          <select>
            <option value="">En</option>
            <option value="">Fr</option>
            <option value="">Cn</option>
          </select>
        </Child>
      </Left>
      <Right>
        <Child>
          <span>LOGIN</span>
        </Child>
        <Child>
          <span>REGISTER</span>
        </Child>
      </Right>
    </Container>
  );
};

export default TopBar;
