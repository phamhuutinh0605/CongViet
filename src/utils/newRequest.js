import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://api-congviet.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
