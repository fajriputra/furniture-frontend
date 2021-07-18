import axios from "axios";
import { apiHost } from "../config";

const instance = axios.create({
  baseURL: `${apiHost}`,
});

instance.interceptors.response.use((response) => response);

export default instance;
