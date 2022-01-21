import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/";
console.log(localStorage.getItem("state.user"));
let TOKEN = "";
if (localStorage.getItem("state.user")) {
  TOKEN =
    JSON.parse(JSON.parse(localStorage.getItem("state.user"))?.user).currentUser
      .accessToken || "";
}
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("state.user"))?.user).currentUser
//     .accessToken || "";

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGYwMzI3NzMxNWZjN2ZlNTBhN2FlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjY0MTY4NiwiZXhwIjoxNjQyOTAwODg2fQ.0DbS7QrU-le8IiEQzoI_CRDp9nBsSJip9CaSi2i3V4I";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
