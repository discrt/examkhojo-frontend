import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://examkhojo.herokuapp.com/api"
    : "http://localhost:5000/api";

export default axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
});
