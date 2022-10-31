import axios from "axios";
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
});


export default instance;