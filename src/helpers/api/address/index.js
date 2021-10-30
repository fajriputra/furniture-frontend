import { apiHost } from "config";
import axios from "helpers/axios";

// params payload diisi dengan data yang akan dikirim ke endpoint
export const createAddress = async (payload) => {
  // baca token dari user yang sedang login melalui localstorage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${apiHost}/api/delivery-address`, payload, {
    // mengidentifikasi user dengan token
    headers: {
      authorizaion: `Bearer ${token}`,
    },
  });
};

// ambil data address melalui params yang dikirim
export const getAddress = async (params) => {
  // baca token dari user yang sedang login melalui localstorage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  // kirim request ke endpoint dengna params limit dan skip
  return await axios.get(`${apiHost}/api/delivery-address`, {
    params: {
      limit: params.limit,
      skip: params.page * params.limit - params.limit,
    },

    // mengidentifikasi user dengan token
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateAddress = async (payload, id) => {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.put(`${apiHost}/api/delivery-address/${id}`, payload, {
    headers: {
      authorizaion: `Bearer ${token}`,
    },
  });
};

// ambil id address yang ingin dihapus
export const deleteAddress = async (id) => {
  // baca token dari user yang sedang login melalui localstorage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.delete(`${apiHost}/api/delivery-address/${id}`, {
    // mengidentifikasi user dengan token
    headers: {
      authorizaion: `Bearer ${token}`,
    },
  });
};
