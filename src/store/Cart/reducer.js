import {
  ADD_ITEM,
  INCREMENT,
  DECREMENT,
  CLEAR_ITEMS,
  SET_ITEMS,
  REMOVE_ITEM,
} from "./constants";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { ...action.item, qty: 1 }];

    case INCREMENT:
      return state.map((item) => ({
        ...item,
        qty: item._id === action.item._id ? item.qty + 1 : item.qty,
      }));

    case DECREMENT:
      // lakukan decrement jika item terdapat pada cart dengan melakukan mapping masing2 item
      return state.map((item) => ({
        ...item,
        qty: item._id === action.item._id ? item.qty - 1 : item.qty,
      }));

    // hapus item dengan button trash
    case REMOVE_ITEM:
      return state.filter((item) => item._id !== action.item._id);
    case CLEAR_ITEMS:
      return [];
    case SET_ITEMS:
      return action.items;
    default:
      return state;
  }
}
