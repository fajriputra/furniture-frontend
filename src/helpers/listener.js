import store from "store";

let currentAuth;

// fungsi untuk menangkap perubahan state
const listener = () => {
  // menetapkan state awal pada variabel previousAuth
  let previousAuth = currentAuth;
  // update state currentAuth dari state yang terbaru
  currentAuth = store.getState().auth;
  // cek apakah nilai state `auth` berubah dari nilai sebelumnya
  if (currentAuth !== previousAuth) {
    // jika berubah simpan ke localstorage dan set key "auth"
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
};

export const listen = () => {
  store.subscribe(listener);
};
