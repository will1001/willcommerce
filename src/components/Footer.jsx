import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f3f3f3;
`;

const AboutUs = styled.div`
  width: 30%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  > :nth-child(1) {
    font-size: 50px;
    font-weight: bold;
    margin-right: 10px;
    color: #f36c4f;
  }
`;

const MyAccount = styled.div`
  width: 20%;
`;

const Extras = styled.div`
  width: 20%;
`;

const Information = styled.div`
  width: 20%;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 5px;
`;
const LinkHref = styled.a`
  display: block;
  color: #777777;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const PaymentContainer = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 13px;
  background-color: #e9e9e9;

  > :nth-child(1) {
    padding: 0 200px;
    margin: 10px;
  }
`;

const Payment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0 10px;
  }
`;

const paymentCardLink = [
  {
    name: "Paypal",
    url: "http://demo.harnishdesign.net/opencart/marketshop/v4/catalog/view/theme/marketshop/image/payment_paypal.png",
  },
  {
    name: "American Express",
    url: "http://demo.harnishdesign.net/opencart/marketshop/v4/catalog/view/theme/marketshop/image/payment_american.png",
  },
  {
    name: "zCheckout",
    url: "http://demo.harnishdesign.net/opencart/marketshop/v4/catalog/view/theme/marketshop/image/payment_2checkout.png",
  },
  {
    name: "Maestro",
    url: "http://demo.harnishdesign.net/opencart/marketshop/v4/catalog/view/theme/marketshop/image/payment_maestro.png",
  },
  {
    name: "SagePay",
    url: "http://demo.harnishdesign.net/opencart/marketshop/v4/catalog/view/theme/marketshop/image/payment_sagepay.png",
  },
  {
    name: "MoneyBookers",
    url: "http://demo.harnishdesign.net/opencart/marketshop/v4/catalog/view/theme/marketshop/image/payment_moneybookers.png",
  },
];

const Footer = () => {
  return (
    <div>
      <Container>
        <AboutUs>
          <Title>ABOUT WILLCOMMERCE</Title>
          <p>
            This is a CMS block edited from theme admin panel. Here, You can
            insert any content (HTML, Text, Images).
          </p>
          <Logo>
            <span>W</span>
            <span>willcommerce</span>
          </Logo>
        </AboutUs>
        <MyAccount>
          <Title>MY ACCOUNT</Title>
          <LinkHref href="/">My Account</LinkHref>
          <LinkHref href="/">Order History</LinkHref>
          <LinkHref href="/">Wish List</LinkHref>
          <LinkHref href="/">Newsletter</LinkHref>
        </MyAccount>
        <Extras>
          <Title>EXTRAS</Title>
          <LinkHref href="/">Brands</LinkHref>
          <LinkHref href="/">Gift Vouchers</LinkHref>
          <LinkHref href="/">Affiliates</LinkHref>
          <LinkHref href="/">Specials</LinkHref>
        </Extras>
        <Information>
          <Title>INFORMATON</Title>
          <LinkHref href="/">About Us</LinkHref>
          <LinkHref href="/">Delivery Information</LinkHref>
          <LinkHref href="/">Privacy Policy</LinkHref>
          <LinkHref href="/">Terms & Conditions</LinkHref>
          <Information></Information>
        </Information>
      </Container>
      <PaymentContainer>
        <div>
          This is a CMS block edited from theme admin panel. Here, You can
          insert any content (HTML, Text, Images). Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.
        </div>
        <Payment>
          {paymentCardLink.map((e, i) => {
            return <img key={i} src={e.url} alt={e.name} />;
          })}
        </Payment>
      </PaymentContainer>
    </div>
  );
};

export default Footer;
