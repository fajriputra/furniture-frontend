import axios from "helpers/axios";

export const getProducts = async (params) => {
  return await axios.get("/api/products", {
    params,
  });
};
