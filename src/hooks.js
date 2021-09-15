import axios from "axios";

const GETConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const POSTConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
};

const baseUrl = "http://localhost:3000/";

export const requestAuthGet = async (url = "") => {
  return await axios.get(baseUrl + url, GETConfig).then((res) => res.data);
};

export const requestAuthPost = async (url = "", body = {}) => {
  return await axios
    .post(baseUrl + url, body, POSTConfig)
    .then((res) => res.data);
};

export const signOut = () => {
  localStorage.clear();
  window.location.reload();
};

export default {
  requestAuthGet,
  requestAuthPost,
  signOut,
};
