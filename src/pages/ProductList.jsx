import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
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

const Container = styled.div`
  display: flex;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const FilterContainer = styled.div`
  width: 500px;
  padding: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px;
`;

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <FilterContainer>
        <h3>Filter Products :</h3>
        <Select>
          <option value="">Color</option>
          <option value="">asdasd</option>
          <option value="">asdasd</option>
        </Select>
        <Select>
          <option value="">Size</option>
          <option value="">asdasd</option>
          <option value="">asdasd</option>
        </Select>
        <h3>Sort Products :</h3>
        <Select>
          <option value="">Newest</option>
          <option value="">price(asc)</option>
          <option value="">price(desc)</option>
          <option value="">Rating</option>
        </Select>
      </FilterContainer>
      <ProductContainer>
        {a.map((e, i) => {
          return <ProductCard key={i} item={e} />;
        })}
      </ProductContainer>
    </Container>
  );
};

export default ProductList;
