import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../redux/apiCalls";
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
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts(dispatch);
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
        {products.map((e, i) => {
          return <ProductCard key={i} item={e} />;
        })}
      </ProductContainer>
    </Container>
  );
};

export default ProductList;
