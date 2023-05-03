import axios from "axios";

const instance = axios.create({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
});

export default instance;
