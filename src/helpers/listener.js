import store from "store";
import { saveCart } from "./api/cart";

let currentAuth;
let currentCart;

// fungsi untuk menangkap perubahan state
const listener = () => {
  // menetapkan state awal pada variabel
  let previousAuth = currentAuth;
  let previousCart = currentCart;

  // update state dari state yang terbaru
  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;

  // ambil token dari user yang sedang login
  let { token } = currentAuth;

  // cek apakah nilai state `auth` berubah dari nilai sebelumnya
  if (currentAuth !== previousAuth) {
    // jika berubah simpan ke localstorage dan set key "auth"
    localStorage.setItem("auth", JSON.stringify(currentAuth));

    // menyimpan data cart berdasarkan user login
    saveCart(token, currentCart);
  }

  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));

    // menyimpan data cart berdasarkan user login
    saveCart(token, currentCart);
  }
};

export const listen = () => {
  store.subscribe(listener);
};
