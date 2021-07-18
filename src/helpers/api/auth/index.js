import axios from "helpers/axios";

export const registerUser = async (data) => {
  return await axios.post("/auth/register", data);
};

export const login = async (email, password) => {
  return await axios.post("/auth/login", { email, password });
};

export const logout = async () => {
  let token = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios
    .post("/auth/logout", null, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.removeItem("auth");
      return response;
    });
};
