import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: 100%;
  > table {
    width: 100%;
  }
  > table,
  th,
  td {
    border: 1px solid #e5e5e5;
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
  }
  td {
    &:first-child {
      cursor: pointer;
      /* background-color: green; */
    }
  }
`;

const Image = styled.img`
  height: 100px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const SubTitle = styled.p`
  font-size: 12px;
`;

const Qty = styled.input`
  padding: 5px;
  width: 30px;
`;

const SubTotal = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  text-align: end;
  > :last-child {
    font-weight: bold;
    font-size: 22px;
  }
`;

const CheckOutButton = styled.div`
  background-color: #1976d2;
  width: 100px;
  color: white;
  padding: 10px;
  border-radius: 50px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
  margin-bottom: 20px;
  :hover {
    background-color: #f36c4f;
    transition-duration: 400ms;
  }
`;

const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const KEY =
    "pk_test_51KHIbmCwpvozxsaj2pq48DupNJTV3ZevmPND9OCc5Y95QsLwOtdQbT6W1EZIyQmRgi2MHj56TDUyIpoA0wrhQucs0032eehDHG";

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 1300 * 100,
        });
        // navigate.push("/success", {
        //   stripeData: res.data,
        //   products: cart,
        // });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DeleteOutlineOutlinedIcon />
            </td>
            <td>
              <Image src="https://cdn.shopify.com/s/files/1/0195/8916/9252/products/07_100x.jpg?v=1603109360" />
            </td>
            <td>
              <Title>Neque Porro Quisquam</Title>
              <SubTitle>Size : M</SubTitle>
              <SubTitle>Color : White</SubTitle>
            </td>
            <td>
              <span>$39.99</span>
            </td>
            <td>
              <Qty type="number" value={2} name="quantity" />
            </td>
            <td>$79.98</td>
          </tr>
          <tr>
            <td>
              <DeleteOutlineOutlinedIcon />
            </td>
            <td>
              <Image src="https://cdn.shopify.com/s/files/1/0195/8916/9252/products/07_100x.jpg?v=1603109360" />
            </td>
            <td>
              <Title>Neque Porro Quisquam</Title>
              <SubTitle>Size : M</SubTitle>
              <SubTitle>Color : White</SubTitle>
            </td>
            <td>
              <span>$39.99</span>
            </td>
            <td>
              <Qty type="number" value={2} name="quantity" />
            </td>
            <td>$79.98</td>
          </tr>
        </tbody>
      </table>
      <SubTotal>
        <span>Subtotal </span>
        <span>$1,300.00</span>
      </SubTotal>
      <StripeCheckout
        name="Wili Shop"
        image="https://png.pngtree.com/png-vector/20190322/ourlarge/pngtree-shop-logo-vector-template-design-illustration-png-image_860078.jpg"
        billingAddress
        shippingAddress
        description={`Your total is $${1300}`}
        amount={1300 * 100}
        token={onToken}
        stripeKey={KEY}
      >
        <CheckOutButton>CheckOut</CheckOutButton>
      </StripeCheckout>
    </Container>
  );
};

export default Cart;
