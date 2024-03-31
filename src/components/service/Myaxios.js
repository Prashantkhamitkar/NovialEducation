import axios from "axios";

const Myaxios = axios.create({
  baseURL: "http://localhost:8080/sogdo/api",
});
export default Myaxios;
