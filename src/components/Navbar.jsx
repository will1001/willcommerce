import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 100px;
  box-shadow: 0px 3px 5px #e0d0d0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  cursor: pointer;
  > :nth-child(1) {
    font-size: 50px;
    font-weight: bold;
    margin-right: 10px;
    color: #f36c4f;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled.input`
  border-radius: 30px 0 0 30px;
  padding: 9px;
  width: 50%;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1976d2;
  padding: 7px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  color: white;
  &:hover {
    transition-duration: 500ms;
    background-color: #f36c4f;
  }
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <span>W</span>
        <span>willcommerce</span>
      </Logo>
      <SearchContainer>
        <SearchInput placeholder="Search Product" />
        <SearchButton>
          <SearchIcon style={{ color: "white" }} sx={{ fontSize: 25 }} />
        </SearchButton>
      </SearchContainer>
      <CartContainer>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
        </Badge>
      </CartContainer>
    </Container>
  );
};

export default Navbar;
