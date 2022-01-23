import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { getProducts, searchProducts, sortProducts } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
`;

const FilterContainer = styled.div`
  width: 300px;
  padding: 20px;
  box-shadow: 2px 0px 5px #e0d0d0;
  background-color: #f5eedc;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px;
  display: block;
`;

const ApplyFilterButton = styled.div`
  background-color: #f36c4f;
  width: 100px;
  color: white;
  padding: 10px;
  border-radius: 50px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  :hover {
    background-color: #5d9cdb;
    transition-duration: 400ms;
  }
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts(dispatch);
  }, []);

  const applyFilter = () => {
    searchProducts(dispatch, color, size);
  };

  const sorting = (sort) => {
    sortProducts(dispatch, sort);
  };

  return (
    <Container>
      <FilterContainer>
        <h3>Filter Products :</h3>
        <Select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Color</option>
          <option value="0000FF">Blue</option>
          <option value="FFFFFF">White</option>
          <option value="000000">Black</option>
        </Select>
        <Select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Size</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </Select>
        <h3>Sort Products :</h3>
        <Select onChange={(e) => sorting(e.target.value)}>
          <option value="">Newest</option>
          <option value="price(asc)">Lowest Price</option>
          <option value="price(desc)">Highest Price</option>
          <option value="rating">Rating</option>
        </Select>
        <ApplyFilterButton onClick={applyFilter}>
          Apply Filter
        </ApplyFilterButton>
      </FilterContainer>
      <ProductContainer>
        {products.map((e, i) => {
          return <ProductCard key={i} item={e} />;
        })}
      </ProductContainer>
    </Container>
  );
};

export default ProductList;
