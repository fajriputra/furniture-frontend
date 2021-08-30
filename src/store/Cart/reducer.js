import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEMS,
  SET_ITEMS,
  TRASH_BUTTON,
} from "./constants";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      // cek apakah sudah ditambahkan atau belum berdasarkan field ._id
      if (state.find((item) => item._id === action.item._id)) {
        // lakukan increment jika item terdapat pada cart dengan melakukan mapping masing2 item
        return state.map((item) => ({
          ...item,
          qty: item._id === action.item._id ? item.qty + 1 : item.qty,
        }));
      } else {
        // item masih kosong/belum ada di state cart
        return [...state, { ...action.item, qty: 1 }];
      }
    case REMOVE_ITEM:
      // lakukan decrement jika item terdapat pada cart dengan melakukan mapping masing2 item
      return state
        .map((item) => ({
          ...item,
          qty: item._id === action.item._id ? item.qty - 1 : item.qty,
        }))
        .filter((item) => item.qty > 0);
    // hapus item dengan button trash
    case TRASH_BUTTON:
      return state.filter((item) => item._id !== action.item._id);
    case CLEAR_ITEMS:
      return [];
    case SET_ITEMS:
      return action.items;
    default:
      return state;
  }
}
