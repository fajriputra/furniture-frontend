import axios from "helpers/axios";

export const getCategories = async () => {
  return await axios.get("/api/categories");
};
