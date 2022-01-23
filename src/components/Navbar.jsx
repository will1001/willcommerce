import React, { useState } from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authLogout } from "../redux/apiCalls";

import { useDispatch } from "react-redux";
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
  cursor: pointer;
  > :first-child {
    margin-right: 20px;
  }
`;

const ProfileMenu = styled.div`
  position: absolute;
  right: 70px;
  top: 100px;
  background-color: white;
  box-shadow: -1px 0px 10px #b4afaf;
  text-align: center;
  z-index: 999;
`;

const ProfileButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b4afaf;
  color: #7c7575;
  padding: 20px 20px;
  width: 80px;
  cursor: pointer;
  &:hover {
    background-color: #f36c4f;
    color: white;
  }
`;

const Navbar = () => {
  const { user } = useSelector((state) => state.auths);
  const navigate = useNavigate();
  const [openProfilMenu, setOpenProfilMenu] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    authLogout(dispatch);
    setOpenProfilMenu(!openProfilMenu);
  };


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
        {user && (
          <PersonOutlineOutlinedIcon
            onClick={() => setOpenProfilMenu(!openProfilMenu)}
            sx={{ fontSize: 30 }}
          />
        )}
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon
            onClick={() => navigate("/cart")}
            sx={{ fontSize: 30 }}
          />
        </Badge>
      </CartContainer>
      {openProfilMenu && (
        <ProfileMenu>
          <ProfileButton onClick={logout}>
            <LogoutIcon style={{ fontSize: 20 }} /> Logout
          </ProfileButton>
        </ProfileMenu>
      )}
    </Container>
  );
};

export default Navbar;
