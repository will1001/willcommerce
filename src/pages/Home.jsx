import React from "react";
import ProductCard from "../components/ProductCard";
import SlideBanner from "../components/SlideBanner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.div`
  box-shadow: 0px 0px 10px #888888;
`;

const ListTitle = styled.div`
  font-size: 22px;
  padding: 20px;
  font-weight: 500;
`;

const Divider = styled.div`
  background-color: #e0d0d0;
  width: 100%;
  height: 1px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  height: 400px;
  img {
    height: 90%;
  }
`;
const CategoryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  border-radius: 10px solid black;
  padding: 10px;
  box-shadow: 0px 0px 5px #888888;
  background-color: #f7f7f7;
  :hover {
    background-color: #daddfc;
    transition-duration: 300ms;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 45px;
  font-weight: 400;
`;

const a = [
  {
    id: "2",
    name: "adad",
    price: 200,
    rating: 100,
    img: "https://img.huffingtonpost.com/asset/599c4f431f00002a001aa577.jpeg?ops=scalefit_960_noupscale",
  },
  {
    id: "3",
    name: "adad2",
    price: 50,
    rating: 80,
    img: "https://img.huffingtonpost.com/asset/599c4f431f00002a001aa577.jpeg?ops=scalefit_960_noupscale",
  },
  {
    id: "1",
    name: "adad3",
    price: 70,
    rating: 60,
    img: "https://img.huffingtonpost.com/asset/599c4f431f00002a001aa577.jpeg?ops=scalefit_960_noupscale",
  },
  {
    id: "4",
    name: "adad",
    price: 200,
    rating: 100,
    img: "https://img.huffingtonpost.com/asset/599c4f431f00002a001aa577.jpeg?ops=scalefit_960_noupscale",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SlideBanner />
      <CategoryContainer>
        <CategoryCard onClick={() => navigate("/productlist")}>
          <img
            src="https://i.ibb.co/qm55Gkz/pexels-chloe-1043473-removebg-preview.png"
            alt="category"
          />
          <div>
            <Title>MEN</Title>
            <SubTitle>UP TO 40% OFF</SubTitle>
          </div>
        </CategoryCard>
        <CategoryCard onClick={() => navigate("/productlist")}>
          <img
            src="https://i.ibb.co/jkRjvRx/pexels-tu-n-ki-t-jr-1382731-removebg-preview.png"
            alt="category"
          />
          <div>
            <Title>WOMEN</Title>
            <SubTitle>UP TO 60% OFF</SubTitle>
          </div>
        </CategoryCard>
      </CategoryContainer>
      <ListContainer>
        <ListTitle>Best Seller</ListTitle>
        <Divider />
        <ProductContainer>
          {a.map((e, i) => {
            return <ProductCard key={i} item={e} />;
          })}
        </ProductContainer>
      </ListContainer>
      <ListContainer>
        <ListTitle>Special</ListTitle>
        <Divider />
        <ProductContainer>
          {a.map((e, i) => {
            return <ProductCard key={i} item={e} />;
          })}
        </ProductContainer>
      </ListContainer>
    </div>
  );
};

export default Home;
