import { apiHost } from "config";
import axios from "helpers/axios";
import store from "store";
import { setItems } from "store/Cart/actions";

export const saveCart = async (token, cart) => {
  // mengambil token berdasarkan user login
  // items sebagai payload yang menerima cart untuk dikirim ke api
  return await axios.put(
    `${apiHost}/api/carts`,
    { items: cart },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getCart = async () => {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  // jika user belum login, stop eksekusi
  if (!token) return;

  // get data berdasarkan user login
  let { data } = await axios.get(`${apiHost}/api/carts`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  // jika tidak error, ambil data cart
  if (!data.error) {
    store.dispatch(setItems(data));
  }
};
