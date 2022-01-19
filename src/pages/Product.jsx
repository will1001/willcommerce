import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
`;

const DetailsProduct = styled.div`
  /* width: 50%; */
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const ButonConainer = styled.span`
  display: flex;
  align-items: center;
`;

const QtyInput = styled.input`
  padding: 2px;
  width: 30px;
  margin-right: 20px;
  height: 20px;
`;

const CartButton = styled.div`
  background-color: #1976d2;
  color: white;
  padding: 10px;
  border-radius: 50px;
  margin-top: 10px;
  font-size: 17px;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation();
  const product = location.state;
  const [qty, setQty] = useState(1);

  return (
    <Container>
      <Image src="https://i.ibb.co/jkRjvRx/pexels-tu-n-ki-t-jr-1382731-removebg-preview.png" />
      <DetailsProduct>
        <Title>{product.name}</Title>
        <Desc>{product.name}</Desc>
        <Price>$ {product.price}</Price>
        <ButonConainer>
          <QtyInput
            type="number"
            placeholder="Qty"
            min={1}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          ></QtyInput>
          <CartButton>Add to Cart</CartButton>
        </ButonConainer>
      </DetailsProduct>
    </Container>
  );
};

export default Product;
