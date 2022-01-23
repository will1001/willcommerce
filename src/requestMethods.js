import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/";
let TOKEN = "";
if (localStorage.getItem("state.user")) {
  TOKEN =
    JSON.parse(JSON.parse(localStorage.getItem("state.user"))?.user).currentUser
      .accessToken || "";
}
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
