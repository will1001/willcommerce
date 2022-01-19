import React from "react";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  text-align: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 50px;
  transition-duration: 400ms;
  border-radius: 10px;
  cursor: pointer;
  > :last-child {
    > :nth-child(1) {
      opacity: 0;
    }
  }
  &:hover {
    box-shadow: 0px 0px 10px #888888;
    transform: scale(1.05);
    > :last-child {
      > :nth-child(1) {
        opacity: 1;
      }
    }
  }
`;

const Img = styled.img`
  height: 350px;
  border-radius: 10px;
`;

const ProductName = styled.div`
  font-size: 17px;
  margin: 5px;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartButton = styled.div`
  background-color: #1976d2;
  width: 50%;
  color: white;
  padding: 10px;
  border-radius: 50px;
  margin-top: 10px;
  cursor: pointer;
`;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  // const []
  return (
    <Container onClick={() => navigate(`/product/${item.id}`, { state: item })}>
      <Img src={item.img} alt="product" />
      <ProductName>{item.name}</ProductName>
      <Rating readonly={true} ratingValue={item.rating} size={15} />
      <Price>${item.price}</Price>
      <ButtonContainer>
        <CartButton>Add to Cart</CartButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductCard;
