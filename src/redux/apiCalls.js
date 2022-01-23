import { publicRequest, userRequest } from "../requestMethods";

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./ProductsRedux";

import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} from "./AuthsRedux";

//products
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const searchProducts = async (dispatch, color, size) => {
  let paramFilter;
  if (color !== "" && size !== "") {
    paramFilter = `${"/filter?color=" + color}${"&size=" + size}`;
  } else if (color !== "" && size === "") {
    paramFilter = `${"/filter?color=" + color}`;
  } else if (color === "" && size !== "") {
    paramFilter = `${"/filter?size=" + size}`;
  } else {
    paramFilter = "";
  }

  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(`/products/${paramFilter}`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const sortProducts = async (dispatch, sort) => {
  let paramSort;
  if (sort === "price(asc)") {
    paramSort = `${"/?price=" + 1}`;
  } else if (sort === "price(desc)") {
    paramSort = `${"/?price=" + -1}`;
  } else {
    paramSort = `${"/?rating=" + -1}`;
  }
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(`/products/sort${paramSort}`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const authLogout = async (dispatch) => {
  dispatch(logout());
};
